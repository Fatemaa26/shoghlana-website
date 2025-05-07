const jobs = [
    {
      title: "Software Engineer",
      image: "software-engineer (1).svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "2",
      link: "#",
    },
  
    {
      title: "Data Scientist",
      image: "data-scientist.svg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Project Manager",
      image: "project-manager.svg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Product Manager",
      image: "product-manager.svg",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Sales Representative",
      image: "sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Marketing Manager",
      image: "marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "1",
      link: "#",
    },
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
      alert ('تم حفظ الوظيفة: ${jobTitle}'); // Corrected to use template literals
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
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;

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