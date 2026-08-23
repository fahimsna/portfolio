import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "../../components/ui/ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
  // Completed projects first.
  // NexPlay stays at the bottom because it is still in development.
  const orderedProjects = [...projects].sort((a, b) => {
    if (a.upcoming === b.upcoming) return 0;
    return a.upcoming ? 1 : -1;
  });

  return (
    <section
      id="projects"
      className="bg-[#08111F] py-24 sm:py-28"
    >
      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-7"
        >
          {orderedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.06, 0.3),
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;