import {
  FaGithub,
  FaExternalLinkAlt,
  FaClock,
  FaUserGraduate,
  FaBook,
  FaChartLine,
} from "react-icons/fa";

const StudentManagementPreview = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07111f] p-6">
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Fake dashboard */}
      <div
        className="
          relative
          mx-auto
          h-full
          max-w-2xl
          rounded-2xl
          border
          border-slate-700/70
          bg-slate-900/90
          p-4
          shadow-2xl
          transition-transform
          duration-500
          group-hover:scale-[1.02]
        "
      >
        {/* Dashboard Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-cyan-400
                font-black
                text-slate-950
              "
            >
              S
            </div>

            <div>
              <p className="text-xs font-bold text-white">Student Management</p>

              <p className="text-[9px] text-slate-500">Admin Dashboard</p>
            </div>
          </div>

          <div className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
        </div>

        {/* Dashboard Body */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-3">
            <FaUserGraduate className="text-cyan-400" />

            <p className="mt-2 text-[9px] text-slate-500">Students</p>

            <p className="text-lg font-bold text-white">248</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-3">
            <FaBook className="text-cyan-400" />

            <p className="mt-2 text-[9px] text-slate-500">Courses</p>

            <p className="text-lg font-bold text-white">32</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-3">
            <FaChartLine className="text-cyan-400" />

            <p className="mt-2 text-[9px] text-slate-500">Active</p>

            <p className="text-lg font-bold text-white">94%</p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-3 rounded-xl border border-slate-800 bg-slate-800/30 p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-white">
              Recent Students
            </p>

            <span className="text-[8px] text-cyan-400">View All</span>
          </div>

          <div className="space-y-2">
            {[
              ["Fahim Shahriar", "CSE"],
              ["Rahim Ahmed", "EEE"],
              ["Nusrat Jahan", "BBA"],
            ].map(([name, department], index) => (
              <div
                key={name}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  bg-slate-900/70
                  px-2
                  py-1.5
                "
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-400/10
                      text-[7px]
                      font-bold
                      text-cyan-400
                    "
                  >
                    {index + 1}
                  </div>

                  <span className="text-[8px] text-slate-300">{name}</span>
                </div>

                <span className="text-[7px] text-slate-500">{department}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview label */}
      <div
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          rounded-full
          border
          border-cyan-400/20
          bg-slate-950/80
          px-4
          py-1
          text-[9px]
          font-semibold
          text-cyan-300
          backdrop-blur
        "
      >
        Student Management System
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-[#111827]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/60
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >
      {/* Preview */}
      <div className="relative h-64 w-full overflow-hidden">
        {project.upcoming ? (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-gradient-to-br
              from-cyan-500/10
              via-slate-900
              to-slate-950
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-400/10
                "
              >
                <FaClock className="text-3xl text-cyan-400" />
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-400/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-cyan-300
                "
              >
                Coming Soon
              </span>
            </div>
          </div>
        ) : (
          <StudentManagementPreview />
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-cyan-400
          "
        >
          {project.category}
        </span>

        <h3
          className="
            mt-3
            text-2xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-400
          "
        >
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-slate-400">{project.description}</p>

        {/* Technologies */}
        {Array.isArray(project.technologies) &&
          project.technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-800/70
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-300
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

        {/* Links */}
        <div className="mt-8 flex items-center gap-6">
          {project.upcoming ? (
            <span
              className="
                flex
                items-center
                gap-2
                text-sm
                italic
                text-slate-500
              "
            >
              <FaClock />
              Project in progress
            </span>
          ) : (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    font-medium
                    text-cyan-400
                    transition
                    hover:text-white
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    font-medium
                    text-cyan-400
                    transition
                    hover:text-white
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
