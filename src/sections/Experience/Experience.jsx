import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import TimelineItem from "../../components/ui/TimelineItem";

import portfolioData from "../../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-[#0B1120]">
      <Container>
        <SectionTitle subtitle="Career" title="Work Experience" />

        <div className="max-w-3xl mx-auto mt-16">
          {portfolioData.experience.map((job, index) => (
            <TimelineItem key={index} {...job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
