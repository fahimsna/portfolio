const projects = [
  {
    id: 1,
    title: "Student Management System",
    category: "Full Stack",
    description:
      "A full-stack student management application for managing student records with a clean, responsive interface and RESTful backend.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/fahimsna/Student-Management-System.git",
    live: "https://student-management-system-mocha-gamma.vercel.app/",
    upcoming: false,
  },

  {
    id: 2,
    title: "NexPlay",
    category: "Upcoming",
    description:
      "A MERN-based entertainment discovery platform with authentication, dashboards, campaign management, and advertisement modules.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    github: null,
    live: null,
    upcoming: true,
  },

  {
    id: 3,
    title: "Disaster Management System",
    category: "Upcoming",
    description:
      "A disaster response and relief coordination platform designed to manage donations, volunteers, emergency campaigns, and relief activities.",
    technologies: ["React", "Express.js", "MongoDB", "JWT", "Stripe"],
    github: null,
    live: null,
    upcoming: true,
  },
];

export default projects;
