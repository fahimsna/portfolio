import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiRender,
} from "react-icons/si";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: FaJs,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },

  {
    title: "Deployment & Tools",
    skills: [
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Render",
        icon: SiRender,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        bg-[#030712]
        py-28
        text-white
      "
    >
      <Container>
        <SectionTitle subtitle="My Expertise" title="Technical Skills" />

        <div className="mt-16 space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
              }}
              viewport={{
                once: true,
              }}
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <h3
                  className="
                    whitespace-nowrap
                    text-lg
                    font-semibold
                    text-slate-200
                  "
                >
                  {category.title}
                </h3>

                <div
                  className="
                    h-px
                    flex-1
                    bg-gradient-to-r
                    from-cyan-400/30
                    to-transparent
                  "
                />
              </div>

              {/* Skills */}
              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                  sm:grid-cols-3
                  lg:grid-cols-4
                "
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        group
                        flex
                        min-h-[120px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-slate-800
                        bg-[#111827]
                        px-5
                        py-6
                        text-center
                        transition-all
                        duration-300
                        hover:border-cyan-400/50
                        hover:bg-[#142033]
                        hover:shadow-lg
                        hover:shadow-cyan-500/10
                      "
                    >
                      {/* Icon */}
                      <Icon
                        className="
                          text-3xl
                          text-slate-400
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:text-cyan-400
                        "
                      />

                      {/* Skill Name */}
                      <span
                        className="
                          mt-4
                          text-sm
                          font-medium
                          text-slate-300
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
