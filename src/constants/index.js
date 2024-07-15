import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import education1 from "../assets/education/education-1.jpg";
import education2 from "../assets/education/education-2.jpg";

export const HERO_CONTENT = ''
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a strong foundation in Java, Spring Boot, MySQL, React, and Android Studio, I am eager to apply my skills and knowledge to real-world projects. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career goal where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing computer games to unwind.`
export const EDUCATION = [
  {
    university: "Aditya Birla Higher Secondary School, Veraval",
    image: education1,
    degree: "XII",
    year: "2021-22",
    Cgpa: "75%",
  },
  {
    university: "Parul University, Vadodara",
    image: education2,
    degree: "BCA",
    year: "2022-25",
    Cgpa: "8",
  }
]

export const PROJECTS = [
  {
    title: "Hospital Management System",
    image: project1,
    description:
      "Implemented CRUD operations for managing doctor and patient records Designed and integrated functionality for booking appointments Ensured efficient database operations and data integrity through optimized queries.",
    technologies: ["Core Java", "JDBC", "mySQL"],
  },
  {
    title: "News Application",
    image: project2,
    description:
      "",
    technologies: ["Core Java", "Retrofit", "REST APIs", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailWindCSS", "React"],
  },
  {
    title: "TODO Web Application",
    image: project4,
    description:
      "Developed a full-stack web application using Spring Boot, Spring Security,and REST APIs for the backend Utilized React for building an interactive and responsive frontend ntegrated MySQL database for efficient data management and storage Implemented user authentication and authorization features with Spring Security Ensured seamless communication between frontend and backend through well-defined RESTful APIs.",
    technologies: ["Spring", "Spring Boot", "Spring Security", "mySQL", "React","REST APIs"],
  },
];

export const CONTACT = {
  address: "Vrundavan Chowkdi,Vadodara,Gujarat",
  phoneNo: "+91 7359012016 ",
  email: "solankiharsh6228@gmail.com",
};
