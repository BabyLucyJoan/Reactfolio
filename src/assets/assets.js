// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaTelegram,
  FaFacebookSquare,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";

import { IoLogoGithub } from "react-icons/io";
import {
  SiTiktok,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "tiktok",
    component: SiTiktok,
    link: "https://www.tiktok.com/@njl_splendour?_t=ZS-8zv7i5MHple&_r=1",
  },
  {
    name: "Telegram", // Social media name
    component: FaTelegram, // Twitter icon from react-icons
    link: "https://t.me/techNteach", // Replace with your actual Twitter URL
  },
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: "https://linkedin.com/in/nwokoye-lucy-5b924128b", // Replace with your actual LinkedIn URL
  },
  {
    name: "facebook",
    component: FaFacebookSquare, // Facebook icon
    link: "https://facebook.com/lucy.nwokoye",
  },
  {
    name: "instagram",
    component: FaInstagramSquare, // Instagram icon
    link: "https://instagram.com/njl_splendour",
  },
  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "https://github.com/BabyLucyJoan",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "Lucy Nwokoye"; // Replace with your name or brand name
const imgLogo = null; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "./public/IMG_9214.jpg", // Your profile image link
  authorDescription:
    "A Fullstack Web developer with a passion for creating dynamic, user-friendly, and visually appealing web applications. I specialise in building responsive interfaces with React, ensuring seamless performance across all devices.", // Short bio or description about yourself
  getInTouchUrl: "https://www.tiktok.com/@njl_splendour?_t=ZS-8zv7i5MHple&_r=1", // URL for your contact or form page
  authorName: "Lucy Nwokoye", // Replace with your name
  profileImgTagLine: "Software Engineer", // Your tagline or job title
  authorContactMail: "nwokoyelucy@gmail.com", // Your email address
  authorContactNumber: "+234-706-756-1427", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: 2024, // Year of graduation
    degreeType: "Bachelor's degree", // Type of degree
    fieldOfStudy: "Geography and Environmental Managemment",
    institution: "University of Port Harcourt", // Institution name
    institutionUrl: "https://www.uniport.edu.ng", // Institution website link (optional)
  },
  {
    graduationYear: 2022, // Year of graduation
    // degreeType: "Frontend Web Development", // Degree type
    institution: "Codecademy", // Institution name
    fieldOfStudy: "Frontend Web Development",
    institutionUrl: "https://www.codecademy.com/", // Institution website link (optional)
  },
  {
    graduationYear: 2023, // Year of graduation
    // degreeType: "Frontend Web Development", // Degree type
    institution: "Smartech Global", // Institution name
    fieldOfStudy: "Fullstack Web Development",
    institutionUrl: "", // Institution website link (optional)
  },
  {
    graduationYear: 2018, // Year of graduation
    // degreeType: "Frontend Web Development", // Degree type
    institution: "Fashion Design Training", // Institution name
    fieldOfStudy: "Pattern Drafting and ewing",
    institutionUrl: "", // Institution website link (optional)
  },
  // Add more educational qualifications if needed
];

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  // {
  //   img: "Your certificate image", // Certificate image URL
  //   title: "Blue Mountain Certificate", // Certificate title
  //   description: "Lorem ipsum...", // Short description of the certification
  //   issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
  //   credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  // },
  // {
  //   img: "Your certificate image", // Certificate image URL
  //   title: "Blue Mountain Certificate", // Certificate title
  //   description: "Lorem ipsum...", // Short description of the certification
  //   issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
  //   credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  // },
  // {
  //   img: "Your certificate image", // Certificate image URL
  //   title: "Blue Mountain Certificate", // Certificate title
  //   description: "Lorem ipsum...", // Short description of the certification
  //   issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
  //   credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  // },
  // {
  //   img: "Your certificate image", // Certificate image URL
  //   title: "Blue Mountain Certificate", // Certificate title
  //   description: "Lorem ipsum...", // Short description of the certification
  //   issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
  //   credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  // },
  // {
  //   img: "Your certificate image", // Certificate image URL
  //   title: "Blue Mountain Certificate", // Certificate title
  //   description: "Lorem ipsum...", // Short description of the certification
  //   issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
  //   credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  // },
  // // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
];

// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
const projectsPage = [
  {
    projectName: "Tech And Teach Community", // Project name
    projectDescription:
      "A vibrant Tech community of over a thousand people from across Africa. It is a space where learners, enthusiasts, and professionals come together to explore technology, share knowledge, and grow through interactive tutorials, challenges, and discussions.", // Project description
    projectURL: "https://t.me/techNteach", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "", // Tech stack used in the project
    // date: "Sep 2022 - May 2023", // Project duration
  },
  {
    projectName: "NJL Splendour E-commerce", // Project name
    projectDescription:
      "Luxury fashion storefront showcasing modern UI and responsive design.", // Project description
    projectURL: "https://njlsplendourecommerce.vercel.app/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "React.js, Next.js, Tailwind CSS, React Icons, Git, GitHub, Vercel", // Tech stack used in the project
    // date: "Sep 2022 - May 2023", // Project duration
  },
  {
    projectName: "NoteAngel", // Project name
    projectDescription:
      "A clean and minimal note-taking app that lets users create and organize notes with ease.", // Project description
    projectURL: "https://noteangel.vercel.app/", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "React.js, JavaScript (ES6+), CSS/Tailwind CSS, React Icons, Git, GitHub, Vercel", // Tech stack used in the project
    // date: "Sep 2022 - May 2023", // Project duration
  },
  {
    projectName: "AtmosphereNow", // Project name
    projectDescription:
      "A real-time weather app that provides instant updates on current conditions with a clean and responsive interface.", // Project description
    projectURL: "https://atmosphere-now.vercel.app", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "", // Optional: GitHub repository link
    tags: "React.js, JavaScript (ES6+), CSS, Weather API (e.g., OpenWeatherMap), Git, GitHub, Vercel", // Tech stack used in the project
    date: "Sep 2022 - May 2023", // Project duration
  },
  // Add more projects or remove the ones you don't need
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
  CertificatesPage,
};
