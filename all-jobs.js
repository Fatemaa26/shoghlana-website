const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    image: "images/software-engineer (1).svg",
    details: "Design, develop, test, and maintain software solutions to meet business requirements. Collaborate with cross-functional teams to deliver high-quality products.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of professional software development experience",
      "Proficiency in JavaScript, Python, or Java",
      "Experience with React, Angular, or Vue.js",
      "Strong understanding of data structures and algorithms",
      "Knowledge of database systems and SQL"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 15,000 - 25,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-15",
    deadline: "2023-06-15",
    openPositions: "2",
    link: "jobs/SE.html"
  },
  {
    id: 2,
    title: "Data Scientist",
    image: "images/data-scientist.svg",
    details: "Analyze complex datasets to extract insights and build predictive models. Develop machine learning solutions to solve business problems.",
    requirements: [
      "Advanced degree in Statistics, Mathematics, or Computer Science",
      "2+ years experience in data analysis or machine learning",
      "Proficiency in Python and R",
      "Experience with TensorFlow or PyTorch",
      "Strong statistical analysis skills",
      "Knowledge of SQL and NoSQL databases"
    ],
    location: "Cairo, Egypt",
    salary: "EG 20,000 - 30,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-10",
    deadline: "2023-06-10",
    openPositions: "3",
    link: "jobs/DataSc.html"
  },
  {
    id: 3,
    title: "Project Manager",
    image: "images/project-manager.svg",
    details: "Lead project teams to deliver solutions on time and within budget. Coordinate resources, timelines, and stakeholder communication.",
    requirements: [
      "Bachelor's degree in Business or related field",
      "PMP certification preferred",
      "5+ years project management experience",
      "Excellent organizational skills",
      "Strong leadership abilities",
      "Proficiency with project management tools"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 25,000 - 35,000",
    jobType: "Full-time",
    experience: "Senior",
    postedDate: "2023-05-12",
    deadline: "2023-06-12",
    openPositions: "1",
    link: "jobs/PrjMan.html"
  },
  {
    id: 4,
    title: "Product Manager",
    image: "images/product-manager.svg",
    details: "Define product vision and roadmap. Work with engineering and design teams to build products that meet customer needs.",
    requirements: [
      "Bachelor's degree in Business or Technology",
      "3+ years product management experience",
      "Strong analytical skills",
      "Experience with Agile methodologies",
      "Excellent communication skills",
      "Technical background preferred"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 22,000 - 32,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-08",
    deadline: "2023-06-08",
    openPositions: "2",
    link: "jobs/PrdMan.html"
  },
  {
    id: 5,
    title: "Sales Representative",
    image: "images/sales-representative.svg",
    details: "Identify new business opportunities and maintain client relationships. Achieve sales targets and contribute to revenue growth.",
    requirements: [
      "Bachelor's degree in Business or related field",
      "2+ years sales experience",
      "Excellent negotiation skills",
      "Strong communication abilities",
      "Self-motivated and target-driven",
      "Knowledge of CRM software"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 10,000 + Commission",
    jobType: "Full-time",
    experience: "Entry-level",
    postedDate: "2023-05-18",
    deadline: "2023-06-18",
    openPositions: "4",
    link: "jobs/SalesRep.html"
  },
  {
    id: 6,
    title: "Marketing Manager",
    image: "images/marketing-manager.svg",
    details: "Develop and execute marketing strategies to promote products and services. Manage campaigns across multiple channels.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "4+ years marketing experience",
      "Digital marketing expertise",
      "Strong analytical skills",
      "Creative thinking",
      "Budget management experience"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 18,000 - 28,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-14",
    deadline: "2023-06-14",
    openPositions: "2",
    link: "jobs/MrktMan.html"
  },
  {
    id: 7,
    title: "Frontend Developer",
    image: "images/front-end (3).png",
    details: "Build responsive and interactive user interfaces using modern JavaScript frameworks. Collaborate with designers to implement UI/UX designs.",
    requirements: [
      "2+ years frontend development experience",
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with React or Angular",
      "Knowledge of responsive design",
      "Understanding of REST APIs",
      "Version control with Git"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 14,000 - 22,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-16",
    deadline: "2023-06-16",
    openPositions: "3",
    link: "jobs/FrntndDev.html"
  },
  {
    id: 8,
    title: "Backend Developer",
    image: "images/back-end (2).png",
    details: "Develop server-side logic and database architecture. Build scalable and secure APIs for web and mobile applications.",
    requirements: [
      "3+ years backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Database design and optimization",
      "API development experience",
      "Knowledge of cloud platforms",
      "Understanding of security principles"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 16,000 - 26,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-17",
    deadline: "2023-06-17",
    openPositions: "2",
    link: "jobs/BckndDev.html"
  },
  {
    id: 9,
    title: "UX Designer",
    image: "images/ux-design (1).png",
    details: "Create user-centered designs through research and testing. Develop wireframes, prototypes, and design systems.",
    requirements: [
      "Portfolio demonstrating UX design skills",
      "2+ years UX design experience",
      "Proficiency in Figma or Sketch",
      "User research experience",
      "Understanding of UI principles",
      "Collaboration with developers"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 12,000 - 20,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-19",
    deadline: "2023-06-19",
    openPositions: "1",
    link: "jobs/UXDes.html"
  },
  {
    id: 10,
    title: "DevOps Engineer",
    image: "images/dev-eng.png",
    details: "Implement and maintain CI/CD pipelines. Manage cloud infrastructure and ensure system reliability.",
    requirements: [
      "2+ years DevOps experience",
      "Knowledge of Docker and Kubernetes",
      "Cloud platform experience (AWS, Azure)",
      "CI/CD pipeline development",
      "Infrastructure as Code (Terraform)",
      "Monitoring and logging tools"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 20,000 - 30,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-20",
    deadline: "2023-06-20",
    openPositions: "2",
    link: "jobs/DevEng.html"
  },
  {
    id: 11,
    title: "Data Analyst",
    image: "images/data-analyst.png",
    details: "Transform raw data into actionable insights. Create reports and visualizations to support business decisions.",
    requirements: [
      "Bachelor's degree in Statistics or related field",
      "Proficiency in SQL",
      "Experience with data visualization tools",
      "Analytical thinking",
      "Excel expertise",
      "Python or R knowledge"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 12,000 - 18,000",
    jobType: "Full-time",
    experience: "Entry-level",
    postedDate: "2023-05-21",
    deadline: "2023-06-21",
    openPositions: "3",
    link: "jobs/DAnalyst.html"
  },
  {
    id: 12,
    title: "HR Manager",
    image: "images/human-resources.png",
    details: "Oversee recruitment, employee relations, and organizational development. Implement HR policies and procedures.",
    requirements: [
      "Bachelor's degree in HR or related field",
      "5+ years HR experience",
      "Knowledge of labor laws",
      "Recruitment expertise",
      "Employee relations skills",
      "HRIS experience"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 18,000 - 25,000",
    jobType: "Full-time",
    experience: "Senior",
    postedDate: "2023-05-22",
    deadline: "2023-06-22",
    openPositions: "1",
    link: "jobs/HRMan.html"
  },
  {
    id: 13,
    title: "Content Writer",
    image: "images/contentwriter.png",
    details: "Create engaging content for websites, blogs, and marketing materials. Ensure content aligns with brand voice and SEO best practices.",
    requirements: [
      "Bachelor's degree in Journalism or related field",
      "2+ years writing experience",
      "Excellent writing and editing skills",
      "SEO knowledge",
      "Research skills",
      "Content management systems"
    ],
    location: "Remote",
    salary: "EGP 8,000 - 15,000",
    jobType: "Full-time",
    experience: "Entry-level",
    postedDate: "2023-05-23",
    deadline: "2023-06-23",
    openPositions: "2",
    link: "jobs/CWriter.html"
  },
  {
    id: 14,
    title: "Customer Support Specialist",
    image: "images/support.png",
    details: "Provide excellent service and resolve customer inquiries. Maintain customer satisfaction and build relationships.",
    requirements: [
      "Excellent communication skills",
      "Problem-solving abilities",
      "Patience and empathy",
      "Technical aptitude",
      "CRM system experience",
      "Multilingual preferred"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 6,000 - 10,000",
    jobType: "Full-time",
    experience: "Entry-level",
    postedDate: "2023-05-24",
    deadline: "2023-06-24",
    openPositions: "4",
    link: "jobs/CstmrSS.html"
  },
  {
    id: 15,
    title: "Financial Analyst",
    image: "images/financial-analysis.png",
    details: "Analyze financial data and prepare reports. Support budgeting, forecasting, and investment decisions.",
    requirements: [
      "Bachelor's degree in Finance or Accounting",
      "3+ years financial analysis experience",
      "Advanced Excel skills",
      "Financial modeling",
      "Attention to detail",
      "Accounting knowledge"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 15,000 - 22,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-25",
    deadline: "2023-06-25",
    openPositions: "2",
    link: "jobs/FAnalyst.html"
  },
  {
    id: 16,
    title: "Graphic Designer",
    image: "images/graphic-designer.png",
    details: "Create visual concepts to communicate ideas. Develop designs for digital and print media.",
    requirements: [
      "Portfolio demonstrating design skills",
      "2+ years design experience",
      "Adobe Creative Suite proficiency",
      "Creativity and innovation",
      "Typography knowledge",
      "Branding experience"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 10,000 - 16,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-26",
    deadline: "2023-06-26",
    openPositions: "1",
    link: "jobs/GraphDes.html"
  },
  {
    id: 17,
    title: "Mobile App Developer",
    image: "images/mobiledev.png",
    details: "Design and build mobile applications for iOS and Android platforms. Ensure performance, quality, and responsiveness.",
    requirements: [
      "2+ years mobile development experience",
      "React Native or Flutter proficiency",
      "iOS/Android SDK knowledge",
      "REST API integration",
      "Mobile UI/UX principles",
      "App store submission process"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 16,000 - 24,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-27",
    deadline: "2023-06-27",
    openPositions: "2",
    link: "jobs/MobDev.html"
  },
  {
    id: 18,
    title: "Cybersecurity Specialist",
    image: "images/cyber-security.png",
    details: "Protect systems and networks from cyber threats. Implement security measures and monitor for vulnerabilities.",
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "Certifications preferred (CISSP, CEH)",
      "Network security knowledge",
      "Penetration testing experience",
      "Security tools proficiency",
      "Incident response skills"
    ],
    location: "Cairo, Egypt",
    salary: "EGP 22,000 - 32,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-28",
    deadline: "2023-06-28",
    openPositions: "1",
    link: "jobs/Cyber.html"
  },
  {
    id: 19,
    title: "Business Analyst",
    image: "images/business-analyst.png",
    details: "Analyze business processes and recommend improvements. Bridge the gap between IT and business objectives.",
    requirements: [
      "Bachelor's degree in Business or IT",
      "3+ years business analysis experience",
      "Requirements gathering",
      "Process modeling",
      "Stakeholder management",
      "Data analysis skills"
    ],
    location: "Cairo, Egypt",
    salary: "EG 14,000 - 22,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-29",
    deadline: "2023-06-29",
    openPositions: "3",
    link: "jobs/BAnalyst.html"
  },
  {
    id: 20,
    title: "Technical Writer",
    image: "images/Technical writer.png",
    details: "Create clear documentation to explain complex technical information. Develop manuals, guides, and API documentation.",
    requirements: [
      "Bachelor's degree in Technical Writing or related field",
      "2+ years technical writing experience",
      "Ability to simplify complex concepts",
      "Technical background",
      "Attention to detail",
      "Markdown and documentation tools"
    ],
    location: "Remote",
    salary: "EGP 10,000 - 16,000",
    jobType: "Full-time",
    experience: "Mid-level",
    postedDate: "2023-05-30",
    deadline: "2023-06-30",
    openPositions: "1",
    link: "jobs/TechW.html"
  }
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

// حفظ الوظائف في Local Storage
const saveJob = (jobTitle) => {
  let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  if (!savedJobs.includes(jobTitle)) {
    savedJobs.push(jobTitle);
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    alert(`تم حفظ الوظيفة: ${jobTitle}`);  // Corrected to use template literals
  } else {
    alert("this job has been saved!"); // Changed to Arabic for consistency
  }
};


jobsHeading.innerHTML = "SHOGHLANA JOBS";

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`; // Backticks
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`; // Backticks
      }



 // زر الحفظ
 let saveBtn = document.createElement("button");
 saveBtn.innerHTML = "Save 💾";
 saveBtn.classList.add("save-btn");
 saveBtn.onclick = () => saveJob(job.title);
     // أزرار التفاعل
     let likeBtn = document.createElement("button");
     likeBtn.innerHTML = "👍 Like (0)";
     likeBtn.classList.add("like-btn");
     likeBtn.onclick = () => {
       let count = updateReactions(job.title, "like");
       likeBtn.innerHTML = '👍 Like (${count})';
     };

     let dislikeBtn = document.createElement("button");
    dislikeBtn.innerHTML = "👎 Dislike (0)";
    dislikeBtn.classList.add("dislike-btn");
    dislikeBtn.onclick = () => {
      let count = updateReactions(job.title, "dislike");
      dislikeBtn.innerHTML = '👎 Dislike (${count})';
    };

    let loveBtn = document.createElement("button");
    loveBtn.innerHTML = "❤ Love (0)";
    loveBtn.classList.add("love-btn");
    loveBtn.onclick = () => {
      let count = updateReactions(job.title, "love");
      loveBtn.innerHTML = '❤ Love (${count})';
    };


      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild( openPositions);
      jobCard.appendChild( saveBtn )
      jobCard.appendChild(likeBtn)
      jobCard.appendChild(dislikeBtn)
      jobCard.appendChild(loveBtn)



      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});


// تحديث عدد التفاعلات وحفظها في Local Storage
const updateReactions = (jobTitle, type) => {
  let reactions = JSON.parse(localStorage.getItem("reactions")) || {};
  
  if (!reactions[jobTitle]) {
      reactions[jobTitle] = { like: 0, dislike: 0, love: 0 };
  }

  reactions[jobTitle][type]++; // زيادة العدد حسب نوع التفاعل
  localStorage.setItem("reactions", JSON.stringify(reactions));

  return reactions[jobTitle][type]; // إرجاع العدد الجديد
};