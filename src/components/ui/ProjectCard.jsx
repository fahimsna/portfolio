import {
  FaGithub,
  FaExternalLinkAlt,
  FaClock,
  FaUserGraduate,
  FaCar,
  FaMapMarkerAlt,
  FaRoute,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHandsHelping,
  FaTasks,
  FaCheckCircle,
  FaGamepad,
} from "react-icons/fa";

/* =========================================================
   PROJECT PREVIEWS
========================================================= */

const StudentPreview = () => (
  <div className="h-full w-full bg-slate-950 p-4">
    <div className="h-full rounded-xl border border-slate-800 bg-slate-900 p-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
            S
          </div>

          <div>
            <div className="h-2 w-20 rounded bg-slate-300" />
            <div className="mt-1 h-1.5 w-12 rounded bg-slate-700" />
          </div>
        </div>

        <div className="h-5 w-16 rounded-md bg-cyan-400/10" />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-cyan-400/10 p-2">
          <FaUserGraduate className="text-xs text-cyan-400" />
          <div className="mt-2 h-2 w-8 rounded bg-white/80" />
          <div className="mt-1 h-1.5 w-12 rounded bg-slate-700" />
        </div>

        <div className="rounded-lg bg-slate-800 p-2">
          <div className="h-2 w-8 rounded bg-white/70" />
          <div className="mt-2 h-2 w-10 rounded bg-cyan-400/70" />
          <div className="mt-1 h-1.5 w-12 rounded bg-slate-700" />
        </div>

        <div className="rounded-lg bg-slate-800 p-2">
          <div className="h-2 w-8 rounded bg-white/70" />
          <div className="mt-2 h-2 w-10 rounded bg-green-400/70" />
          <div className="mt-1 h-1.5 w-12 rounded bg-slate-700" />
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-slate-800 p-3">
        <div className="mb-2 flex justify-between">
          <div className="h-2 w-20 rounded bg-white/70" />
          <div className="h-2 w-10 rounded bg-cyan-400/50" />
        </div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="mb-2 flex items-center justify-between rounded-md bg-slate-800/70 p-2 last:mb-0"
          >
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-slate-700" />
              <div className="h-1.5 w-16 rounded bg-slate-500" />
            </div>

            <div className="h-1.5 w-8 rounded bg-slate-600" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GontobboPreview = () => (
  <div className="h-full w-full bg-[#061413] p-4">
    <div className="relative h-full overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-950">
      {/* map */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-[10%] top-[15%] h-px w-[80%] rotate-12 bg-emerald-500/20" />
        <div className="absolute left-[5%] top-[55%] h-px w-[90%] -rotate-6 bg-cyan-400/20" />
        <div className="absolute left-[25%] top-[5%] h-[90%] w-px rotate-[20deg] bg-emerald-500/20" />
        <div className="absolute left-[65%] top-0 h-full w-px -rotate-[18deg] bg-cyan-400/20" />
      </div>

      <div className="relative flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400 text-slate-950">
            <FaCar className="text-xs" />
          </div>

          <span className="text-xs font-bold text-white">Gontobbo</span>
        </div>

        <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] text-emerald-400">
          Find Ride
        </span>
      </div>

      <div className="absolute left-[25%] top-[35%]">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30">
          <FaMapMarkerAlt className="text-xs" />
        </div>
      </div>

      <div className="absolute right-[22%] bottom-[30%]">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30">
          <FaRoute className="text-xs" />
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-slate-700 bg-slate-900/95 p-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] uppercase text-slate-500">Route</p>

            <p className="text-[9px] font-semibold text-white">
              Dhaka → Uttara
            </p>
          </div>

          <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[8px] font-bold text-slate-950">
            Book
          </button>
        </div>
      </div>
    </div>
  </div>
);

const DisasterPreview = () => (
  <div className="h-full w-full bg-[#120909] p-4">
    <div className="h-full rounded-xl border border-red-500/20 bg-slate-950 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
            <FaShieldAlt className="text-xs" />
          </div>

          <div>
            <p className="text-[10px] font-bold text-white">Relief Command</p>

            <p className="text-[7px] text-slate-500">Emergency coordination</p>
          </div>
        </div>

        <FaExclamationTriangle className="text-xs text-red-400" />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-red-500/10 p-2">
          <p className="text-[7px] text-slate-500">INCIDENTS</p>

          <p className="mt-1 text-sm font-bold text-red-400">12</p>
        </div>

        <div className="rounded-lg bg-orange-500/10 p-2">
          <p className="text-[7px] text-slate-500">ACTIVE</p>

          <p className="mt-1 text-sm font-bold text-orange-400">08</p>
        </div>

        <div className="rounded-lg bg-emerald-500/10 p-2">
          <p className="text-[7px] text-slate-500">VOLUNTEERS</p>

          <p className="mt-1 text-sm font-bold text-emerald-400">64</p>
        </div>
      </div>

      <div className="relative mt-3 h-[80px] overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[15%] top-[20%] h-px w-[70%] rotate-12 bg-slate-400" />
          <div className="absolute left-[5%] top-[60%] h-px w-[90%] -rotate-6 bg-slate-400" />
          <div className="absolute left-[40%] top-0 h-full w-px rotate-12 bg-slate-400" />
        </div>

        <div className="absolute left-[25%] top-[35%] h-2.5 w-2.5 rounded-full bg-red-500 shadow-lg shadow-red-500/60" />

        <div className="absolute left-[62%] top-[55%] h-2.5 w-2.5 rounded-full bg-orange-400 shadow-lg shadow-orange-400/60" />

        <div className="absolute right-[18%] top-[25%] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-900 p-2">
        <FaHandsHelping className="text-xs text-emerald-400" />

        <span className="text-[8px] text-slate-300">
          Relief campaigns & volunteer coordination
        </span>
      </div>
    </div>
  </div>
);

const TodoPreview = () => (
  <div className="flex h-full w-full items-center justify-center bg-slate-100 p-5">
    <div className="w-full max-w-sm rounded-xl bg-white p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
            <FaTasks className="text-xs" />
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-800">My Tasks</p>

            <p className="text-[7px] text-slate-400">2 tasks remaining</p>
          </div>
        </div>

        <span className="text-[8px] font-semibold text-blue-600">Today</span>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="flex-1 rounded-md border border-slate-200 px-2 py-1.5 text-[8px] text-slate-400">
          Add a task...
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">
          +
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        <div className="flex items-center gap-2 rounded-md bg-slate-50 p-2">
          <FaCheckCircle className="text-[10px] text-green-500" />

          <span className="text-[8px] text-slate-400 line-through">
            Update portfolio
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-md bg-slate-50 p-2">
          <div className="h-2.5 w-2.5 rounded-full border border-slate-300" />

          <span className="text-[8px] text-slate-700">Deploy application</span>
        </div>

        <div className="flex items-center gap-2 rounded-md bg-slate-50 p-2">
          <div className="h-2.5 w-2.5 rounded-full border border-slate-300" />

          <span className="text-[8px] text-slate-700">Push changes</span>
        </div>
      </div>
    </div>
  </div>
);

const GamePreview = () => (
  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-5">
    <div className="w-full max-w-sm rounded-xl border border-purple-400/20 bg-slate-950/80 p-4 text-center shadow-xl">
      <div className="flex items-center justify-center gap-2">
        <FaGamepad className="text-sm text-purple-400" />

        <span className="text-xs font-bold text-white">
          Rock Paper Scissors
        </span>
      </div>

      <div className="mt-3 flex justify-center gap-8">
        <div>
          <p className="text-[7px] uppercase text-slate-500">You</p>

          <p className="text-xl font-black text-white">3</p>
        </div>

        <div className="text-lg text-slate-700">:</div>

        <div>
          <p className="text-[7px] uppercase text-slate-500">CPU</p>

          <p className="text-xl font-black text-white">2</p>
        </div>
      </div>

      <p className="mt-2 text-[8px] text-slate-500">Choose your move</p>

      <div className="mt-3 flex justify-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-lg transition-transform duration-300 group-hover:-translate-y-1">
          ✊
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-lg transition-transform duration-300 group-hover:-translate-y-2">
          ✋
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-lg transition-transform duration-300 group-hover:-translate-y-1">
          ✌️
        </div>
      </div>

      <div className="mt-3 rounded-md bg-purple-500 py-1.5 text-[8px] font-bold text-white">
        YOU WIN!
      </div>
    </div>
  </div>
);

const NexPlayPreview = () => (
  <div className="h-full w-full bg-[#07111f] p-4">
    <div className="h-full rounded-xl border border-cyan-400/20 bg-slate-950 p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-black text-white">NexPlay</p>

          <p className="text-[7px] text-slate-500">Sports & live events</p>
        </div>

        <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[7px] text-cyan-400">
          LIVE
        </span>
      </div>

      <div className="mt-3 rounded-lg border border-slate-800 bg-slate-900 p-3">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white">
              A
            </div>

            <p className="mt-1 text-[7px] text-slate-400">Arsenal</p>
          </div>

          <div className="text-center">
            <p className="text-[7px] text-cyan-400">72'</p>

            <p className="text-lg font-black text-white">2 - 1</p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white">
              C
            </div>

            <p className="mt-1 text-[7px] text-slate-400">Chelsea</p>
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-slate-900 p-2">
          <p className="text-[7px] text-slate-500">TOURNAMENT</p>

          <p className="mt-1 text-[8px] font-semibold text-white">
            Premier League
          </p>
        </div>

        <div className="rounded-lg bg-slate-900 p-2">
          <p className="text-[7px] text-slate-500">NEXT MATCH</p>

          <p className="mt-1 text-[8px] font-semibold text-white">20:30</p>
        </div>
      </div>
    </div>
  </div>
);

/* =========================================================
   PREVIEW SELECTOR
========================================================= */

const ProjectPreview = ({ project }) => {
  switch (project.preview) {
    case "student":
      return <StudentPreview />;

    case "gontobbo":
      return <GontobboPreview />;

    case "disaster":
      return <DisasterPreview />;

    case "todo":
      return <TodoPreview />;

    case "game":
      return <GamePreview />;

    case "nexplay":
      return <NexPlayPreview />;

    default:
      return (
        <div className="flex h-full items-center justify-center bg-slate-950">
          <FaClock className="text-3xl text-cyan-400" />
        </div>
      );
  }
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5">
      {/* COMPACT PREVIEW */}
      <div className="h-[190px] overflow-hidden">
        <ProjectPreview project={project} />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
            {project.category}
          </span>

          {project.upcoming && (
            <span className="flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1 text-[9px] text-yellow-400">
              <FaClock />
              Coming Soon
            </span>
          )}
        </div>

        <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-800 bg-slate-800/70 px-2 py-1 text-[9px] font-medium text-slate-400"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-md border border-slate-800 bg-slate-800/70 px-2 py-1 text-[9px] text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2.5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-white"
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
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
