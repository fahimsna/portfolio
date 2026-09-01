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
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-25 top-[20%] h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-25 -right-25 h-87.5 w-87.5 rounded-full bg-blue-500/10 blur-[130px]" />

      <Container>
        <div className="relative z-10 flex min-h-screen items-center py-28">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-lg font-semibold text-cyan-400">Hello, I'm</p>

              <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
                Fahim <span className="text-cyan-400">Shahriar Nur</span>
              </h1>

              {/* Animated Developer Title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="mt-8 flex min-h-14.5 items-center"
              >
                <h2 className="text-3xl font-bold text-slate-200 md:text-4xl">
                  {typedTitle}
                  <span className="ml-1 inline-block animate-pulse text-cyan-400">
                    |
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                I build modern, scalable and responsive web applications using
                modern full-stack technologies.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View My Work
                  <FaArrowRight />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Contact Me
                  <FaEnvelope />
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex items-center gap-6">
                <a
                  href="https://github.com/fahimsna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-xl text-slate-400 transition hover:text-cyan-400"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-xl text-slate-400 transition hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:fahimshahriarnur@gmail.com"
                  aria-label="Email"
                  className="text-xl text-slate-400 transition hover:text-cyan-400"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>

            {/* PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Image Glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Decorative Outer Ring */}
                <div className="relative rounded-full border border-cyan-400/30 p-3">
                  <div className="rounded-full border border-slate-700 bg-slate-900 p-2">
                    <img
                      src={profile}
                      alt="Fahim Shahriar Nur"
                      className="h-64 w-64 rounded-full object-cover object-top shadow-2xl md:h-80 md:w-80"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
