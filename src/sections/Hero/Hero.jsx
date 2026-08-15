import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

import Container from "../../components/layout/Container";
import profile from "../../assets/images/profile.jpg";

const Hero = () => {
  const title = "Full Stack Developer";

  const [typedTitle, setTypedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && typedTitle.length < title.length) {
      timeout = setTimeout(() => {
        setTypedTitle(title.slice(0, typedTitle.length + 1));
      }, 100);
    } else if (!isDeleting && typedTitle.length === title.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && typedTitle.length > 0) {
      timeout = setTimeout(() => {
        setTypedTitle(title.slice(0, typedTitle.length - 1));
      }, 55);
    } else if (isDeleting && typedTitle.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedTitle, isDeleting]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
      "
    >
      {/* Right Background Portrait */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute
          right-0
          top-0
          h-full
          w-[55%]
          hidden
          lg:block
        "
      >
        <img
          src={profile}
          alt="Fahim Shahriar Nur"
          className="
            absolute
            right-0
            top-0
            h-full
            w-full
            object-cover
            object-top
            opacity-55
            brightness-110
            contrast-110
          "
        />

        {/* Left Fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#030712]
            via-[#030712]/70
            to-transparent
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-48
            bg-gradient-to-t
            from-[#030712]
            to-transparent
          "
        />

        {/* Soft Glow */}
        <div
          className="
            absolute
            right-32
            top-32
            w-[350px]
            h-[350px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
          "
        />
      </motion.div>

      {/* Background Glow */}
      <div
        className="
          absolute
          left-10
          top-40
          w-[250px]
          h-[250px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      <Container>
        <div className="relative z-10 pt-32 pb-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-xl"
          >
            <p className="text-cyan-400 font-semibold text-lg">Hello, I'm</p>

            <h1
              className="
                mt-4
                text-5xl
                md:text-6xl
                font-bold
                leading-tight
                text-white
              "
            >
              Fahim <span className="text-cyan-400">Shahriar Nur</span>
            </h1>

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  animate-pulse
                "
              />

              <span className="text-sm text-cyan-300">
                Open for Software Engineer Opportunities
              </span>
            </div>

            {/* Animated Developer Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mt-8
                min-h-[58px]
                flex
                items-center
              "
            >
              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-slate-200
                "
              >
                {typedTitle}
                <span
                  className="
                    inline-block
                    ml-1
                    text-cyan-400
                    animate-pulse
                  "
                >
                  |
                </span>
              </h2>
            </motion.div>

            <p
              className="
                mt-6
                text-slate-400
                text-lg
                leading-8
                max-w-xl
              "
            >
              I build modern, scalable and responsive web applications using
              modern full-stack technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  rounded-xl
                  bg-cyan-400
                  text-slate-950
                  font-semibold
                  hover:bg-cyan-300
                  transition
                "
              >
                View My Work
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-slate-700
                  text-white
                  font-semibold
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                Contact Me
                <FaEnvelope />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">
              <a
                href="https://github.com/fahimsna"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  text-slate-400
                  hover:text-cyan-400
                  text-xl
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  text-slate-400
                  hover:text-cyan-400
                  text-xl
                  transition
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:fahimshahriarnur@gmail.com"
                aria-label="Email"
                className="
                  text-slate-400
                  hover:text-cyan-400
                  text-xl
                  transition
                "
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
