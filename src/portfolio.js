/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Raza",
  title: "Hi all, I'm Ahmed Raza",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rTV36sgduY_PP2gDGBOmT_yRkHkwODkK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmedrazasheikh",
  linkedin: "https://www.linkedin.com/in/ahmed-raza-486b21259/",
  gmail: "ahmedrazagithub@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61551648578522",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/19394908/muhammad-raza",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aptech",
      logo: require("./assets/images/icon-aptech.png"),
      subHeader: "ACCP-Prime",
      duration: "September 2019 - April 2021",
      descBullets: [
        "Embarked on a transformation journey at Aptech, participating in the ACCP-Prime program.",
        "Engaged in a diverse range of learning experiences from September 2019 to April 2021."
      ]

    },
    {
      schoolName: "freeCodeCamp",
      logo: require("./assets/images/fcc_primary_small.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["I completed the Full Stack Development program at freeCodeCamp, a comprehensive and renowned platform for learning coding and software development. "] }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Radiant Cortex",
      companylogo: require("./assets/images/RadiantCortex.jpg"),
      date: "November 2023 – Present",
      desc: "I am currently serving as a Full Stack Developer at Radiant Cortex, a dynamic and innovative company. Since joining in November 2023, I have been actively contributing to the development and enhancement of cutting-edge projects.",

    },    
    {
      role: "React Developer",
      company: "It Verticals",
      companylogo: require("./assets/images/download.jpeg"),
      date: "May 2022 – November 2023",
      desc: "I had the privilege of serving as a React Developer at It Verticals, a forward-thinking company dedicated to innovation and technological excellence. During my tenure from May 2021 to May 2018, I played a pivotal role in crafting dynamic and responsive user interfaces.",
    },
    {
      role: "MERN Stack Developer",
      company: "Alpha Tech",
      companylogo: require("./assets/images/ALpha.jpeg"),
      date: "Jan 2021 – May 2022",
      desc: "I had the privilege of serving as a MERN Stack Developer at Alpha Tech, a pioneering company at the forefront of technology and innovation. During my tenure from January 2015 to September 2015, I played a key role in the development of robust and scalable web applications.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/leatherscin-logo.jpg"),
      projectName: "Leatherscin",
      projectDesc: "Leatherscin stands as a sophisticated and user-centric jacket-selling website, meticulously crafted to deliver a seamless shopping experience. As the React Developer for this project, I spearheaded the development of a platform that not only showcases an exquisite collection of jackets but also prioritizes user engagement and satisfaction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.leatherscin.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Asset 6.57455d4e0cf36cd15713.png"),
      projectName: "Amzvistas",
      projectDesc: "Amzvistas is a dynamic Amazon service developed with precision and innovation, offering users an enhanced and seamless experience. As the lead React Developer on this project, I played a crucial role in crafting a feature-rich application that aligns with the high standards of Amazon services.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.amzvistas.com/"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Full Stack Developer",
      subtitle: "I am proud to have successfully completed the Full Stack Developer course at SMIT, where I honed my skills in both front-end and back-end technologies, gaining a comprehensive understanding of the entire development stack.",
      image: require("./assets/images/download.png"),
      imageAlt: "SMIT Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://res.cloudinary.com/dneh5diea/image/upload/v1678264050/Certification2_g8zp3r.jpg"
        },
      
      ]
    },
    {
      title: "Frontend Developer",
      subtitle: "I successfully completed the Frontend Developer course at freeCodeCamp, acquiring comprehensive knowledge and skills in modern web development practices. Throughout the course, I engaged in hands-on learning, mastering key technologies.",
      image: require("./assets/images/fcc_primary_small.jpg"),
      imageAlt: "freecodecamp Action Logo",
      footerLink: [
        {
          name: "View freecodecamp Certificate",
          url: "https://www.freecodecamp.org/certification/fcc03c0671d-325e-44fb-b300-dd559d104d5fd/javascript-algorithms-and-data-structures"
        }
      ]
    },

  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-327 8227842",
  email_address: "ahmedrazagithub@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
