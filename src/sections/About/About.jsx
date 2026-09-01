import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Card from "../../components/ui/Card";

import portfolioData from "../../data/portfolioData";

const About = () => {
  const cards = [
    {
      icon: FaGraduationCap,
      title: "Final-Year Student",
      text: "BSc in Computer Science at BRAC University",
    },
    {
      icon: FaBriefcase,
      title: "Internship",
      text: "Completed my Software Development Internship at Brain Craft Ltd.",
    },
    {
      icon: FaCode,
      title: "Full-Stack",
      text: "React • Node.js • Express • MongoDB",
    },
    {
      icon: FaLaptopCode,
      title: "What I Build",
      text: "Modern, responsive and API-driven web applications.",
    },
  ];

  return (
    <section id="about" className="bg-[#08111F] py-28 text-white">
      <Container>
        <SectionTitle subtitle="Get To Know Me" title="About Me" />

        {/* About Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-slate-400
          "
        >
          {portfolioData.about.description}
        </motion.p>

        {/* About Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            items-stretch
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="h-full"
              >
                <Card>
                  <div
                    className="
                      flex
                      h-[250px]
                      w-full
                      flex-col
                      items-center
                      justify-center
                      px-6
                      text-center
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        text-cyan-400
                      "
                    >
                      <Icon size={30} />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-6
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        max-w-[220px]
                        text-[15px]
                        leading-6
                        text-slate-400
                      "
                    >
                      {card.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default About;
