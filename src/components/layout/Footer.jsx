import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#08111F] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              Fahim
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="text-slate-400 mt-2">Full Stack Developer</p>
          </div>

          {/* Social */}

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/fahimsna"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/fahimsna"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Back To Top */}

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center transition"
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Fahim Shahriar Nur. Built with React,
          Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
