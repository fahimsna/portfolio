import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300

        ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }

      `}
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          Fahim
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                text-slate-300
                hover:text-cyan-400
                transition
                font-medium
                "
            >
              {link.name}
            </motion.a>
          ))}

          {/* Resume */}

          <a
            href="/resume.pdf"
            download="Fahim-Shahriar-Nur-Resume.pdf"
            className="
            flex
            items-center
            gap-2
            px-5
            py-2.5
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            transition
            text-white
            font-semibold
            "
          >
            Resume
            <FaFileDownload />
          </a>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-white
          text-2xl
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="
            md:hidden
            bg-[#020617]/95
            backdrop-blur-xl
            border-t
            border-white/10
            "
          >
            <div
              className="
              flex
              flex-col
              px-6
              py-6
              gap-5
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                  "
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Resume */}

              <a
                href="/resume.pdf"
                download="Fahim-Shahriar-Nur-Resume.pdf"
                onClick={() => setOpen(false)}
                className="
                text-center
                px-5
                py-3
                rounded-xl
                bg-cyan-500
                text-white
                font-semibold
                "
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
