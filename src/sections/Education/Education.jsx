import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import EducationCard from "../../components/ui/EducationCard";

import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="py-28 bg-[#08111F]">
      <Container>
        <SectionTitle subtitle="Education" title="Academic Journey" />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {education.map((item) => (
            <EducationCard key={item.id} education={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
