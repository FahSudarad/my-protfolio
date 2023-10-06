import getThatJobs from "../assets/images/get-that-jobs.png";
import hitHive from "../assets/images/hit-hive.png";
import ageCal from "../assets/images/age-cal.png";
import crud from "../assets/images/CRUD.jpg";
import notifications from "../assets/images/notifications.png";
import nextJs from "../assets/images/next-js.png";
import vite from "../assets/images/vite.png";
import react from "../assets/images/react-native.png";
import jobs from "../assets/images/get-that-jobs.gif";
import api from "../assets/images/hit-hive.gif";
import cal from "../assets/images/age-cal.gif";
import crudGif from "../assets/images/CRUD.gif";
import noti from "../assets/images/noti.gif";

const portfolio = [
  {
    id: "01",
    subTitle: "A group project",
    icon: nextJs,
    image: getThatJobs,
    name: "Get That Jobs",
    description:
      "A job-matching platform built using Next.js and Supabase database, with authentication, job posting, and resume file uploading features. Developed as a team project in May 2023.",
    tag1: "Next.js",
    tag2: "Supabase",
    tag3: "Tailwind CSS",
    tag4: "Responsive",
    tag5: "Full Stack",
    version: "Next.js v13.2.4",
    link: "https://github.com/KraiyosW/get-that-job",
    gif: jobs,
  },
  {
    id: "02",
    subTitle: "Practice API",
    icon: vite,
    image: hitHive,
    name: "Hit-Hive",
    description:
      "A website that utilizes templates from the YouTube channel 'JavaScript Mastery' and fetches data from the Rapid API Hub to display the top 10 Billboard charts, using Tailwind and Vite.",
    tag1: "Vite",
    tag2: "Rapid API",
    tag4: "Tailwind CSS",
    tag5: "Responsive",
    tag6: "Frontend",
    version: "vite v2.9.16",
    link: "https://github.com/FahSudarad/billboard-ranking/tree/main/hit-hive/hit-hive",
    gif: api,
  },
  {
    id: "03",
    subTitle: "practice frontend skills",
    icon: react,
    image: ageCal,
    name: "Age Calculator",
    description:
      "This is a project used for practicing frontend skills from the website 'Frontend Mentor.' It's a project that calculates age based on the input date, automatically calculating the age, using React and native CSS.",
    tag1: "React",
    tag2: "Native CSS",
    tag3: "Responsive",
    tag4: "Frontend",
    version: "react@18.2.0",
    link: "https://github.com/FahSudarad/Age-calculator-app",
    gif: cal,
  },
  {
    id: "04",
    subTitle: "practice frontend skills",
    icon: nextJs,
    image: crud,
    name: "CRUD Project",
    description:
      "This project is a front-end development exercise that utilizes Next.js and Material-UI (MUI). It fetches mock data from the mockapi.io website. The project allows for the creation, reading, updating, and deletion of data, as well as the ability to search for information. It includes a pagination feature for splitting content across multiple pages and is responsive, adapting gracefully to various devices.",
    tag1: "Next.js",
    tag2: "MUI UI",
    tag3: "Responsive",
    tag6: "Frontend",
    version: "Next.js v13.5.2",
    link: "https://github.com/FahSudarad/CRUD",
    gif: crudGif,
  },
  {
    id: "05",
    subTitle: "practice frontend skills",
    icon: react,
    image: notifications,
    name: "Notifications Page",
    description:
      "This is a project used to practice frontend skills from the 'Frontend Mentor' website. It's a project that focuses on creating a notifications page. It includes functions for counting notifications and implements various conditions to change the CSS when notifications are marked as read. This project is implemented using React and native CSS.",
    tag1: "React",
    tag2: "Native CSS",
    tag3: "Responsive",
    tag6: "Frontend",
    version: "react@18.2.0",
    link: "https://github.com/FahSudarad/notifications-page",
    gif: noti,
  },
];
export default portfolio;
