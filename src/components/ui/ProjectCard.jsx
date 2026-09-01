import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiStripe,
  SiAxios,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiHtml5,
} from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  "React.js": <FaReact />,
  Vite: <SiVite />,
  "Tailwind CSS": <SiTailwindcss />,
  JavaScript: <SiJavascript />,
  Node: <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  Mongoose: <SiMongoose />,
  Stripe: <SiStripe />,
  Axios: <SiAxios />,
  JWT: <SiJsonwebtokens />,
  "REST API": <FaCode />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Vercel: <SiVercel />,
  Render: <SiRender />,
  HTML5: <SiHtml5 />,
  CSS3: <FaCode />,
};

const techColors = {
  React: "text-cyan-400",
  "React.js": "text-cyan-400",
  Vite: "text-purple-400",
  "Tailwind CSS": "text-cyan-300",
  JavaScript: "text-yellow-300",
  Node: "text-green-400",
  "Node.js": "text-green-400",
  Express: "text-gray-300",
  "Express.js": "text-gray-300",
  MongoDB: "text-green-500",
  Mongoose: "text-red-400",
  Stripe: "text-indigo-400",
  Axios: "text-purple-300",
  JWT: "text-orange-300",
  "REST API": "text-blue-300",
  Git: "text-orange-400",
  GitHub: "text-white",
  Vercel: "text-white",
  Render: "text-cyan-300",
  HTML5: "text-orange-500",
  CSS3: "text-blue-400",
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-[#0B1628] shadow-xl shadow-black/10 transition-all duration-300 hover:border-cyan-400/30"
    >
      {/* Live Website Preview */}
      <div className="relative aspect-[16/9] overflow-hidden bg-white">
        <iframe
          src={project.live}
          title={`${project.title} live preview`}
          loading="lazy"
          className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
        />

        {/* Preview overlay */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Open ${project.title}`}
        >
          <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/85 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
            Open Website
            <FaExternalLinkAlt className="text-[10px]" />
          </span>
        </a>

        {/* Browser-style top bar */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex h-7 items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />

          <div className="ml-3 h-3 flex-1 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* Project information */}
      <div className="p-6 sm:p-7">
        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-300"
            >
              <span className={techColors[tech] || "text-slate-400"}>
                {techIcons[tech] || <FaCode />}
              </span>

              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Live Demo
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
