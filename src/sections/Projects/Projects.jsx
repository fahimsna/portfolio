import { motion } from "framer-motion";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "../../components/ui/ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#08111F]">
      <Container>
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 mt-16"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
