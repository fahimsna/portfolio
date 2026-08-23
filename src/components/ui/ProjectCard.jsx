import {
  FaGithub,
  FaExternalLinkAlt,
  FaClock,
  FaUserGraduate,
  FaBook,
  FaChartLine,
  FaCar,
  FaMapMarkerAlt,
  FaRoute,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHandsHelping,
  FaTasks,
  FaCheckCircle,
  FaCircle,
  FaGamepad,
} from "react-icons/fa";

/* =========================
   STUDENT MANAGEMENT
========================= */

const StudentManagementPreview = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07111f] p-6">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto h-full max-w-2xl rounded-2xl border border-slate-700/70 bg-slate-900/90 p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-slate-950">
              S
            </div>

            <div>
              <p className="text-xs font-bold text-white">Student Management</p>

              <p className="text-[9px] text-slate-500">Admin Dashboard</p>
            </div>
          </div>

          <div className="h-2 w-2 rounded-full bg-green-400" />
        </div>

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
            ].map(([name, department]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-lg bg-slate-900/70 px-2 py-1.5"
              >
                <span className="text-[8px] text-slate-300">{name}</span>

                <span className="text-[7px] text-slate-500">{department}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   GONTOBBO
========================= */

const GontobboPreview = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07111f] p-6">
      <div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto h-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 text-slate-950">
              <FaCar />
            </div>

            <div>
              <p className="text-xs font-bold text-white">Gontobbo</p>

              <p className="text-[8px] text-slate-500">
                Your journey starts here
              </p>
            </div>
          </div>

          <span className="text-[8px] text-emerald-400">Online</span>
        </div>

        <div className="p-4">
          <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-emerald-400" />

              <div>
                <p className="text-[8px] text-slate-500">PICKUP</p>

                <p className="text-[10px] font-semibold text-white">Dhaka</p>
              </div>
            </div>

            <div className="my-2 ml-2 h-3 border-l border-dashed border-slate-600" />

            <div className="flex items-center gap-3">
              <FaRoute className="text-cyan-400" />

              <div>
                <p className="text-[8px] text-slate-500">DESTINATION</p>

                <p className="text-[10px] font-semibold text-white">Uttara</p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-emerald-400 px-4 py-2">
            <span className="text-[10px] font-bold text-slate-950">
              Find a Ride
            </span>

            <FaCar className="text-slate-950" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Book Ride", "My Trips", "Driver"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-2 text-center text-[8px] text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   DISASTER RELIEF
========================= */

const DisasterPreview = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#120b0b] p-6">
      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto h-full max-w-2xl rounded-2xl border border-red-900/40 bg-slate-950 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white">
              <FaShieldAlt />
            </div>

            <div>
              <p className="text-xs font-bold text-white">
                Relief Coordination
              </p>

              <p className="text-[8px] text-slate-500">
                Emergency Response System
              </p>
            </div>
          </div>

          <FaExclamationTriangle className="text-red-400" />
        </div>

        <div className="p-4">
          <div className="relative h-20 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(148,163,184,.1)_50%,transparent_51%),linear-gradient(transparent_49%,rgba(148,163,184,.1)_50%,transparent_51%)] bg-[size:30px_30px]" />

            <div className="absolute left-[25%] top-[30%] h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/60" />

            <div className="absolute left-[60%] top-[55%] h-3 w-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/60" />

            <div className="absolute left-[78%] top-[25%] h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-2 text-center">
              <p className="text-[8px] text-slate-400">Incidents</p>

              <p className="text-sm font-bold text-red-400">12</p>
            </div>

            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-2 text-center">
              <p className="text-[8px] text-slate-400">Active</p>

              <p className="text-sm font-bold text-yellow-400">08</p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-center">
              <p className="text-[8px] text-slate-400">Volunteers</p>

              <p className="text-sm font-bold text-emerald-400">64</p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
            <div className="flex items-center gap-2">
              <FaHandsHelping className="text-red-400" />

              <span className="text-[9px] text-white">Relief Campaigns</span>
            </div>

            <span className="text-[8px] text-cyan-400">View All</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   TODO APP
========================= */

const TodoPreview = () => {
  const tasks = [
    { name: "Finish project", done: true },
    { name: "Update portfolio", done: true },
    { name: "Deploy application", done: false },
    { name: "Push to GitHub", done: false },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f7fb] p-6">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FaTasks />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">My Tasks</p>

            <p className="text-[9px] text-slate-400">Stay productive today</p>
          </div>
        </div>

        <div className="mb-3 flex gap-2">
          <div className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-[9px] text-slate-400">
            Add a new task...
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">
            +
          </div>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.name}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-2.5"
            >
              {task.done ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaCircle className="text-slate-300" />
              )}

              <span
                className={`text-[9px] ${
                  task.done ? "text-slate-400 line-through" : "text-slate-700"
                }`}
              >
                {task.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center text-[9px] text-slate-400">
          2 of 4 tasks completed
        </div>
      </div>
    </div>
  );
};

/* =========================
   ROCK PAPER SCISSORS
========================= */

const GamePreview = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-6">
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative w-full max-w-md rounded-2xl border border-purple-400/20 bg-slate-950/80 p-5 text-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center justify-center gap-2">
          <FaGamepad className="text-purple-400" />

          <p className="text-sm font-bold text-white">Rock Paper Scissors</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-purple-500/10 p-3">
            <p className="text-[8px] text-purple-300">YOU</p>

            <p className="text-2xl font-black text-white">3</p>
          </div>

          <div className="rounded-xl bg-pink-500/10 p-3">
            <p className="text-[8px] text-pink-300">COMPUTER</p>

            <p className="text-2xl font-black text-white">2</p>
          </div>
        </div>

        <p className="mt-4 text-[10px] text-slate-400">Choose your move</p>

        <div className="mt-3 grid grid-cols-3 gap-3">
          <button className="rounded-xl border border-purple-400/20 bg-purple-500/10 py-3 text-2xl">
            ✊
          </button>

          <button className="rounded-xl border border-purple-400/20 bg-purple-500/10 py-3 text-2xl">
            ✋
          </button>

          <button className="rounded-xl border border-purple-400/20 bg-purple-500/10 py-3 text-2xl">
            ✌️
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-purple-500 py-2 text-[10px] font-bold text-white">
          YOU WIN!
        </div>
      </div>
    </div>
  );
};

/* =========================
   NEXPLAY / UPCOMING
========================= */

const UpcomingPreview = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
          <FaClock className="text-3xl text-cyan-400" />
        </div>

        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
          Coming Soon
        </span>
      </div>
    </div>
  );
};

/* =========================
   MAIN PROJECT CARD
========================= */

const ProjectPreview = ({ project }) => {
  switch (project.preview) {
    case "student":
      return <StudentManagementPreview />;

    case "gontobbo":
      return <GontobboPreview />;

    case "disaster":
      return <DisasterPreview />;

    case "todo":
      return <TodoPreview />;

    case "game":
      return <GamePreview />;

    default:
      return <UpcomingPreview />;
  }
};

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* PROJECT PREVIEW */}
      <div className="relative h-64 w-full overflow-hidden">
        {project.upcoming ? (
          <UpcomingPreview />
        ) : (
          <ProjectPreview project={project} />
        )}
      </div>

      {/* PROJECT CONTENT */}
      <div className="p-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          {project.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-slate-400">{project.description}</p>

        {/* TECHNOLOGIES */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="mt-8 flex items-center gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-cyan-400 transition hover:text-white"
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
              className="flex items-center gap-2 font-medium text-cyan-400 transition hover:text-white"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

          {project.upcoming && (
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <FaClock />
              In Progress
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
