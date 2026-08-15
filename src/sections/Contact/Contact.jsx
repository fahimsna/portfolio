import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ContactCard from "../../components/ui/ContactCard";

import contact from "../../data/contact";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-[#0B1120]">
      <Container>
        <SectionTitle subtitle="Let's Connect" title="Get In Touch" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value={contact.email}
            link={`mailto:${contact.email}`}
          />

          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="fahimsna"
            link={contact.github}
          />

          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/fahimsna"
            link={contact.linkedin}
          />

          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            value={contact.location}
            link="#"
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
