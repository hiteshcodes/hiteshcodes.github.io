// window.addEventListener("scroll", (event) => {
//   let scroll = this.scrollY;
//   console.log("here " + scroll);
// });

let skills = [
  {
    "skillheading": "Frontend",
    "skillName": "HTML",
    "url": "https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5",
    "tags": "html frontend static site hypertext markup language"
  },
  {
    "skillheading": "Frontend",
    "skillName": "CSS",
    "url": "https://img.shields.io/badge/CSS-05122A?&style=flat&logo=css3&logoColor=blue",
    "tags": "css frontend styles styling layout"
  },
  {
    "skillheading": "Frontend",
    "skillName": "Bootstrap",
    "url": "https://img.shields.io/badge/Bootstrap-05122A?style=flat&logo=bootstrap&logoColor=563D7C",
    "tags": "frontend css framework bootstrap responsive design"
  },
  {
    "skillheading": "Frontend",
    "skillName": "JavaScript",
    "url": "https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript",
    "tags": "frontend scripting language js"
  },
  {
    "skillheading": "Frontend",
    "skillName": "React",
    "url": "https://img.shields.io/badge/-React-05122A?style=flat&logo=react",
    "tags": "frontend js framework react single page application"
  },
  {
    "skillheading": "Frontend",
    "skillName": "NextJS",
    "break": true,
    "url": "https://img.shields.io/badge/Next.js-05122A?style=flat&logo=nextdotjs&logoColor=white",
    "tags": "frontend js framework next.js server-side rendering"
  },
  {
    "skillheading": "Backend",
    "skillName": "NodeJS",
    "url": "https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js",
    "tags": "backend js runtime node.js server-side"
  },
  {
    "skillheading": "Backend",
    "skillName": "ExpressJS",
    "url": "https://img.shields.io/badge/Express.js-05122A?style=flat",
    "tags": "backend js framework express.js web server"
  },
  {
    "skillheading": "Backend",
    "skillName": "Firebase",
    "url": "https://img.shields.io/badge/-Firebase-05122A?style=flat&logo=firebase&logoColor=FEC260",
    "tags": "backend platform firebase database cloud services"
  },
  {
    "skillheading": "Backend",
    "skillName": "MongoDB",
    "url": "https://img.shields.io/badge/MongoDB-05122A?style=flate&logo=mongodb&logoColor=4EA94B",
    "tags": "backend database mongodb nosql"
  },
  {
    "skillheading": "Backend",
    "skillName": "Redis",
    "break": true,
    "url": "https://img.shields.io/badge/redis-%2305122A.svg?&style=flat&logo=redis&logoColor=DD0031",
    "tags": "backend data storage cache redis"
  },
  {
    "skillheading": "Analytics",
    "skillName": "Google Analytics",
    "url": "https://img.shields.io/badge/Google%20Analytics-05122A?style=flat&logo=google%20analytics&logoColor=E37400",
    "tags": "search platform apache solr"
  },
  {
    "skillheading": "Analytics",
    "skillName": "Google Tag Manager",
    "url": "https://img.shields.io/badge/Google%20Tag%20Manager-05122A?style=flat&logo=google%20tag%20manager&logoColor=4385f5",
    "break": true,
    "tags": "search platform apache solr"
  },
  {
    "skillheading": "Tools",
    "skillName": "Apache Solr",
    "url": "https://img.shields.io/badge/Solr-05122A?style=flat&logo=apache%20solr&logoColor=#ffffff",
    "tags": "search platform apache solr"
  },
  {
    "skillheading": "Tools",
    "skillName": "Apache Kafka",
    "break": true,
    "url": "https://img.shields.io/badge/Apache%20Kafka-05122A?flat&logo=apachekafka",
    "tags": "search platform apache solr"
  },
  {
    "skillheading": "DevOps",
    "skillName": "Git",
    "url": "https://img.shields.io/badge/-Git-05122A?style=flat&logo=git",
    "tags": "version control git repository collaboration"
  },
  {
    "skillheading": "DevOps",
    "skillName": "GitHub",
    "url": "https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github",
    "tags": "version control github repository open source"
  },
  {
    "skillheading": "DevOps",
    "skillName": "Postman",
    "url": "https://img.shields.io/badge/-postman-05122A?style=flat&logo=postman",
    "tags": "api testing postman development"
  },
  {
    "skillheading": "DevOps",
    "skillName": "Visual Studio Code",
    "url": "https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC",
    "tags": "code editor vs code development"
  },
  {
    "skillheading": "DevOps",
    "skillName": "Hyper Terminal",
    "url": "https://img.shields.io/badge/-hyper%20termianl-05122A?style=flat&logo=hyper&logoColor=ffffff",
    "tags": "terminal emulator hyper command line"
  },
];


let skillsElem = document.getElementById("skills-ul")

skills.map(skill => {
  const br = document.createElement("br");

  const li = document.createElement("li");
  li.ariaLabel = skill.tags

  const img = document.createElement("img");
  img.src = skill.url
  img.alt = skill.skillName + " icon"
  // img.width = "50"
  img.height = "30"

  li.appendChild(img)

  skillsElem.appendChild(li)

  if (skill.break) {
    skillsElem.appendChild(br)
  }
})

let projects = [
  {
    "name": "React Todo List",
    "url": "https://hitesh-todolist.netlify.app/",
    "git": "https://github.com/hiteshcodes/react-todo-list",
  },
  {
    "name": "Ecommerce Store",
    "url": "https://hiteshcodes.github.io/E-commerce/",
    "git": "https://github.com/hiteshcodes/E-commerce",
  },
  {
    "name": "Expense Manager",
    "url": "https://github.com/hiteshcodes/react-expense-manager",
    "git": "",
  },
];


let projectsElem = document.getElementById("projects-ul")

projects.map(skill => {
  const br = document.createElement("br");
  const span = document.createElement("span");
  span.innerText = " - "

  const li = document.createElement("li");

  const a = document.createElement("a");

  a.href = skill.url
  a.alt = skill.name
  a.target = "_blank"
  a.innerText = skill.name

  const img = document.createElement("img");
  img.src = "./icons/github.svg"
  img.alt = "git icon"
  // img.width = "50"
  img.height = "20"

  const git = document.createElement("a");
  git.href = skill.git
  git.alt = skill.name
  git.target = "_blank"
  // git.appendChild(img)
  git.innerText = "git"

  li.appendChild(a)
  li.appendChild(span)
  li.appendChild(git)

  projectsElem.appendChild(li)

  if (skill.break) {
    projectsElem.appendChild(br)
  }
})
