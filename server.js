require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Database Connection
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'shoghlana',
    port: process.env.DB_PORT || 3304
};

let db;

async function connectDB() {
    try {
        db = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL database');
    } catch (err) {
        console.error('Error connecting to MySQL:', err.message);
        console.error('Database Config:', {
            host: dbConfig.host,
            user: dbConfig.user,
            database: dbConfig.database,
            port: dbConfig.port
        });
        process.exit(1);
    }
}

// Serve specific pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'employerhome.html'));
});
app.get('/EMPpostjob.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'EMPpostjob.html'));
});
app.get('/ViewApplications.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ViewApplications.html'));
});
app.get('/EMPProfile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'EMPProfile.html'));
});
app.get('/messages.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'messages.html'));
});
app.get('/analytics.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'analytics.html'));
});

// Fetch Stats (for employerhome.html)
app.get('/api/stats', async (req, res) => {
    try {
        const [activeJobs] = await db.execute('SELECT COUNT(*) as count FROM jobs WHERE posted_at <= NOW()');
        const activeJobsCount = activeJobs[0].count;

        const [newApplications] = await db.execute('SELECT COUNT(*) as count FROM applications WHERE status = "pending"');
        const newApplicationsCount = newApplications[0].count;

        const [totalCandidates] = await db.execute('SELECT COUNT(DISTINCT user_id) as count FROM applications');
        const totalCandidatesCount = totalCandidates[0].count;

        const [shortlisted] = await db.execute('SELECT COUNT(*) as count FROM applications WHERE status = "accepted"');
        const shortlistedCount = shortlisted[0].count;

        res.json({
            activeJobs: activeJobsCount,
            newApplications: newApplicationsCount,
            totalCandidates: totalCandidatesCount,
            shortlisted: shortlistedCount
        });
    } catch (err) {
        console.error('Error fetching stats:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch Recent Activities (for employerhome.html)
app.get('/api/activities', async (req, res) => {
    try {
        const [messages] = await db.execute(`
            SELECT m.message_id, m.message_text, m.sent_at, 
                   CONCAT(s.username, ' sent a message to ', r.username) as activity_message
            FROM messages m
            JOIN users s ON m.sender_id = s.user_id
            JOIN users r ON m.receiver_id = r.user_id
            ORDER BY m.sent_at DESC
            LIMIT 4
        `);

        const activities = messages.map(msg => ({
            message: msg.activity_message,
            time: new Date(msg.sent_at).getTime()
        }));

        res.json(activities);
    } catch (err) {
        console.error('Error fetching activities:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Log Activity (for employerhome.html)
app.post('/api/log-activity', async (req, res) => {
    const { sender_id, receiver_id, message } = req.body;

    if (!sender_id || !receiver_id || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await db.execute(
            'INSERT INTO messages (sender_id, receiver_id, message_text) VALUES (?, ?, ?)',
            [sender_id, receiver_id, message]
        );
        res.status(201).json({ message: 'Activity logged successfully' });
    } catch (err) {
        console.error('Error logging activity:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Post a new job (for EMPpostjob.html)
app.post('/api/post-job', async (req, res) => {
    const { employer_id, title, description, location, salary } = req.body;

    if (!employer_id || !title || !description || !location || !salary) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await db.execute(
            'INSERT INTO jobs (employer_id, title, description, location, salary, posted_at) VALUES (?, ?, ?, ?, ?, NOW())',
            [employer_id, title, description, location, salary]
        );
        res.status(201).json({ message: 'Job posted successfully' });
    } catch (err) {
        console.error('Error posting job:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch employer jobs (for EMPpostjob.html)
app.get('/api/employer-jobs', async (req, res) => {
    const { employer_id } = req.query;

    if (!employer_id) {
        return res.status(400).json({ error: 'Missing employer_id' });
    }

    try {
        const [jobs] = await db.execute(
            'SELECT job_id, title, description, location, salary, posted_at FROM jobs WHERE employer_id = ? ORDER BY posted_at DESC',
            [employer_id]
        );
        res.json(jobs);
    } catch (err) {
        console.error('Error fetching employer jobs:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch applications (for ViewApplications.html)
app.get('/api/applications', async (req, res) => {
    const { employer_id } = req.query;

    if (!employer_id) {
        return res.status(400).json({ error: 'Missing employer_id' });
    }

    try {
        const [applications] = await db.execute(`
            SELECT a.application_id, a.status, a.applied_at, j.title, u.username
            FROM applications a
            JOIN jobs j ON a.job_id = j.job_id
            JOIN users u ON a.user_id = u.user_id
            WHERE j.employer_id = ? ORDER BY a.applied_at DESC`,
            [employer_id]
        );
        res.json(applications);
    } catch (err) {
        console.error('Error fetching applications:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch employer profile (for EMPProfile.html)
app.get('/api/profile', async (req, res) => {
    const { employer_id } = req.query;

    if (!employer_id) {
        return res.status(400).json({ error: 'Missing employer_id' });
    }

    try {
        const [profile] = await db.execute(
            'SELECT username, email FROM users WHERE user_id = ? AND role = "employer"',
            [employer_id]
        );
        if (profile.length === 0) {
            return res.status(404).json({ error: 'Employer not found' });
        }
        res.json(profile[0]);
    } catch (err) {
        console.error('Error fetching profile:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch messages (for messages.html)
app.get('/api/messages', async (req, res) => {
    const { employer_id } = req.query;

    if (!employer_id) {
        return res.status(400).json({ error: 'Missing employer_id' });
    }

    try {
        const [messages] = await db.execute(`
            SELECT m.message_id, m.message_text, m.sent_at, u.username as sender_name
            FROM messages m
            JOIN users u ON m.sender_id = u.user_id
            WHERE m.receiver_id = ? OR m.sender_id = ?
            ORDER BY m.sent_at DESC`,
            [employer_id, employer_id]
        );
        res.json(messages);
    } catch (err) {
        console.error('Error fetching messages:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch analytics (for analytics.html)
app.get('/api/analytics', async (req, res) => {
    const { employer_id } = req.query;

    if (!employer_id) {
        return res.status(400).json({ error: 'Missing employer_id' });
    }

    try {
        const [activeJobs] = await db.execute('SELECT COUNT(*) as count FROM jobs WHERE employer_id = ? AND posted_at <= NOW()', [employer_id]);
        const [totalApplications] = await db.execute('SELECT COUNT(*) as count FROM applications a JOIN jobs j ON a.job_id = j.job_id WHERE j.employer_id = ?', [employer_id]);
        const [acceptedApplications] = await db.execute('SELECT COUNT(*) as count FROM applications a JOIN jobs j ON a.job_id = j.job_id WHERE j.employer_id = ? AND a.status = "accepted"', [employer_id]);

        res.json({
            activeJobs: activeJobs[0].count,
            totalApplications: totalApplications[0].count,
            acceptedApplications: acceptedApplications[0].count
        });
    } catch (err) {
        console.error('Error fetching analytics:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start Server
async function startServer() {
    await connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

startServer();