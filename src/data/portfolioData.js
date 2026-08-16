const portfolioData = {
  personal: {
    name: "Fahim Shahriar Nur",
    title: "Full Stack Developer",
    subtitle: "Computer Science Student & Software Development Intern",
    location: "Dhaka, Bangladesh",

    email: "YOUR_EMAIL@gmail.com",
    phone: "+8801770224222",

    github: "https://github.com/fahimsna",
    linkedin: "https://linkedin.com/in/fahimsna",

    resume: "/resume.pdf",

    heroDescription:
      "I build secure, scalable, and responsive web applications using React, Node.js, Express.js, and MongoDB. I enjoy solving real-world problems with clean architecture and modern UI.",
  },

  about: {
    description:
      "I'm a Computer Science student at BRAC University and a Software Development Intern at Brain Craft Ltd. I enjoy building full-stack applications using the MERN stack and continuously improving my problem-solving and software engineering skills.",
  },

  experience: [
    {
      company: "Brain Craft Ltd.",
      companyUrl: "https://braincraftapps.com",
      role: "Software Development Intern",
      duration: "June 2026 – August 2026",
      responsibilities: [
        "Developed full-stack MERN applications.",
        "Built responsive React interfaces.",
        "Integrated RESTful APIs using Express.js.",
        "Worked with MongoDB for data management.",
        "Collaborated using Git and GitHub.",
      ],
    },
  ],

  education: [
    {
      institution: "BRAC University",
      degree: "BSc in Computer Science",
      duration: "2022 - Present",
    },
    {
      institution: "Shahid Syed Nazrul Islam College",
      degree: "HSC (Science)",
      duration: "2018 - 2020",
    },
    {
      institution: "Mymensingh Zilla School",
      degree: "SSC (Science)",
      duration: "2016 - 2018",
    },
  ],

  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],

    backend: ["Node.js", "Express.js", "REST API", "JWT Authentication"],

    database: ["MongoDB", "MySQL"],

    tools: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
  },

  projects: [
    {
      title: "NexPlay",
      description:
        "Entertainment discovery platform with authentication, dashboards, campaign management, and REST APIs.",

      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],

      github: "",
      live: "",
      image: "",
    },

    {
      title: "Disaster Management System",
      description:
        "Disaster response platform featuring donation management, volunteers, authentication, and role-based access.",

      tech: ["React", "Express", "MongoDB", "Stripe"],

      github: "",
      live: "",
      image: "",
    },

    {
      title: "Part-Time Job Portal",
      description:
        "MERN-based job portal connecting students and employers with authentication and CRUD functionality.",

      tech: ["React", "Express", "MongoDB"],

      github: "",
      live: "",
      image: "",
    },
  ],
};

export default portfolioData;