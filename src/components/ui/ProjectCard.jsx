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
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

/* =========================================================
   STUDENT MANAGEMENT SYSTEM
========================================================= */

const StudentPreview = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#f5f7fb]">
      <div className="h-full bg-white">
        {/* navbar */}
        <div className="flex h-12 items-center justify-between border-b border-slate-200 px-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-[10px] font-black text-white">
              S
            </div>

            <span className="text-[10px] font-bold text-slate-800">
              Student Management
            </span>
          </div>

          <div className="hidden gap-4 sm:flex">
            <span className="text-[7px] font-medium text-indigo-600">
              Dashboard
            </span>
            <span className="text-[7px] text-slate-400">Students</span>
            <span className="text-[7px] text-slate-400">Courses</span>
          </div>

          <div className="h-6 w-6 rounded-full bg-slate-200" />
        </div>

        {/* hero */}
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="flex flex-col justify-center">
            <p className="text-[7px] font-bold uppercase tracking-widest text-indigo-600">
              Dashboard
            </p>

            <h3 className="mt-2 text-xl font-black leading-tight text-slate-900">
              Manage your
              <br />
              students easily.
            </h3>

            <p className="mt-2 max-w-[190px] text-[7px] leading-4 text-slate-400">
              Manage students, academic records and information from one simple
              platform.
            </p>

            <div className="mt-3 flex gap-2">
              <div className="rounded-md bg-indigo-600 px-3 py-1.5 text-[7px] font-bold text-white">
                Get Started
              </div>

              <div className="rounded-md border border-slate-200 px-3 py-1.5 text-[7px] font-semibold text-slate-500">
                View Students
              </div>
            </div>
          </div>

          {/* dashboard illustration */}
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white p-2 shadow-sm">
                <FaUserGraduate className="text-[10px] text-indigo-600" />

                <p className="mt-2 text-[7px] text-slate-400">Students</p>

                <p className="text-sm font-black text-slate-800">248</p>
              </div>

              <div className="rounded-lg bg-white p-2 shadow-sm">
                <FaUsers className="text-[10px] text-purple-500" />

                <p className="mt-2 text-[7px] text-slate-400">Classes</p>

                <p className="text-sm font-black text-slate-800">24</p>
              </div>
            </div>

            <div className="mt-2 rounded-lg bg-white p-2 shadow-sm">
              <div className="mb-2 h-1.5 w-16 rounded bg-slate-200" />

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="mb-1.5 flex items-center gap-2 last:mb-0"
                >
                  <div className="h-4 w-4 rounded-full bg-indigo-100" />
                  <div className="h-1.5 flex-1 rounded bg-slate-100" />
                  <div className="h-1.5 w-5 rounded bg-indigo-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   GONTOBBO
========================================================= */

const GontobboPreview = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#061513]">
      <div className="relative h-full">
        {/* decorative map */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[5%] top-[25%] h-px w-[90%] rotate-12 bg-emerald-400/40" />
          <div className="absolute left-[5%] top-[65%] h-px w-[90%] -rotate-6 bg-cyan-400/40" />
          <div className="absolute left-[25%] top-0 h-full w-px rotate-[20deg] bg-emerald-400/30" />
          <div className="absolute left-[70%] top-0 h-full w-px -rotate-[15deg] bg-cyan-400/30" />
        </div>

        {/* navbar */}
        <div className="relative flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400 text-slate-950">
              <FaCar className="text-[10px]" />
            </div>

            <span className="text-[11px] font-black text-white">Gontobbo</span>
          </div>

          <div className="hidden gap-4 sm:flex">
            <span className="text-[7px] text-emerald-400">Home</span>
            <span className="text-[7px] text-slate-400">About</span>
            <span className="text-[7px] text-slate-400">Services</span>
          </div>

          <div className="rounded-md bg-emerald-400 px-3 py-1.5 text-[7px] font-bold text-slate-950">
            Get Started
          </div>
        </div>

        {/* hero */}
        <div className="relative grid grid-cols-2 gap-4 px-5 pt-4">
          <div className="flex flex-col justify-center">
            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              Ride with confidence
            </p>

            <h3 className="mt-2 text-xl font-black leading-tight text-white">
              Your journey,
              <br />
              our priority.
            </h3>

            <p className="mt-2 max-w-[180px] text-[7px] leading-4 text-slate-400">
              Get where you need to go safely, comfortably and affordably.
            </p>

            <div className="mt-3 flex gap-2">
              <div className="rounded-md bg-emerald-400 px-3 py-1.5 text-[7px] font-bold text-slate-950">
                Book a Ride
              </div>

              <div className="rounded-md border border-slate-700 px-3 py-1.5 text-[7px] text-white">
                Become a Driver
              </div>
            </div>
          </div>

          {/* ride card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[210px] rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <FaMapMarkerAlt className="text-[9px] text-emerald-400" />

                <div>
                  <p className="text-[6px] text-slate-500">PICKUP</p>

                  <p className="text-[8px] font-semibold text-white">Dhaka</p>
                </div>
              </div>

              <div className="flex items-center gap-2 py-2">
                <FaRoute className="text-[9px] text-cyan-400" />

                <div>
                  <p className="text-[6px] text-slate-500">DESTINATION</p>

                  <p className="text-[8px] font-semibold text-white">Uttara</p>
                </div>
              </div>

              <div className="rounded-md bg-emerald-400 py-2 text-center text-[7px] font-bold text-slate-950">
                Find a Ride
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   DISASTER RELIEF
========================================================= */

const DisasterPreview = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#fffaf8]">
      <div className="h-full">
        {/* navbar */}
        <div className="flex items-center justify-between border-b border-orange-100 px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-white">
              <FaShieldAlt className="text-[10px]" />
            </div>

            <span className="text-[10px] font-black text-slate-800">
              ReliefConnect
            </span>
          </div>

          <div className="hidden gap-4 sm:flex">
            <span className="text-[7px] text-orange-600">Home</span>
            <span className="text-[7px] text-slate-400">Campaigns</span>
            <span className="text-[7px] text-slate-400">Volunteers</span>
          </div>

          <div className="rounded-md bg-orange-500 px-3 py-1.5 text-[7px] font-bold text-white">
            Help Now
          </div>
        </div>

        {/* hero */}
        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-orange-600">
              <FaExclamationTriangle />
              Emergency Response
            </div>

            <h3 className="mt-2 text-xl font-black leading-tight text-slate-900">
              Together we can
              <br />
              make a difference.
            </h3>

            <p className="mt-2 max-w-[190px] text-[7px] leading-4 text-slate-500">
              Connect people, volunteers and resources to support communities
              affected by disasters.
            </p>

            <div className="mt-3 flex gap-2">
              <div className="rounded-md bg-orange-500 px-3 py-1.5 text-[7px] font-bold text-white">
                Donate Now
              </div>

              <div className="rounded-md border border-orange-200 px-3 py-1.5 text-[7px] font-semibold text-orange-600">
                Volunteer
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="flex items-center">
            <div className="w-full rounded-xl border border-orange-100 bg-white p-3 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-orange-50 p-2">
                  <FaExclamationTriangle className="text-[9px] text-orange-500" />
                  <p className="mt-1 text-[7px] text-slate-400">Active Cases</p>
                  <p className="text-sm font-black text-slate-800">12</p>
                </div>

                <div className="rounded-lg bg-emerald-50 p-2">
                  <FaHandsHelping className="text-[9px] text-emerald-500" />
                  <p className="mt-1 text-[7px] text-slate-400">Volunteers</p>
                  <p className="text-sm font-black text-slate-800">64</p>
                </div>
              </div>

              <div className="mt-2 rounded-lg bg-slate-50 p-2">
                <p className="text-[7px] font-semibold text-slate-700">
                  Current Relief Campaign
                </p>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[72%] rounded-full bg-orange-500" />
                </div>

                <div className="mt-1 flex justify-between text-[6px] text-slate-400">
                  <span>72% funded</span>
                  <span>৳720K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   TODO LIST
========================================================= */

const TodoPreview = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#f8fafc]">
      <div className="mx-auto h-full max-w-lg bg-white">
        {/* navbar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FaTasks className="text-[10px]" />
            </div>

            <span className="text-[10px] font-black text-slate-800">
              To-Do List
            </span>
          </div>

          <div className="h-5 w-5 rounded-full bg-blue-50" />
        </div>

        {/* content */}
        <div className="p-5">
          <p className="text-[7px] font-semibold uppercase tracking-widest text-blue-600">
            Stay organized
          </p>

          <h3 className="mt-1 text-xl font-black text-slate-900">
            Get things done.
          </h3>

          <p className="mt-1 text-[7px] text-slate-400">
            Manage your tasks and stay productive.
          </p>

          <div className="mt-4 flex gap-2">
            <div className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-[8px] text-slate-400">
              What needs to be done?
            </div>

            <div className="rounded-lg bg-blue-600 px-3 py-2 text-[8px] font-bold text-white">
              Add
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
              <FaCheckCircle className="text-[10px] text-green-500" />

              <span className="text-[8px] text-slate-400 line-through">
                Update portfolio
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5">
              <div className="h-2.5 w-2.5 rounded-full border-2 border-blue-400" />

              <span className="text-[8px] text-slate-700">
                Deploy application
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
              <div className="h-2.5 w-2.5 rounded-full border-2 border-blue-400" />

              <span className="text-[8px] text-slate-700">
                Push changes to GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   ROCK PAPER SCISSORS
========================================================= */

const GamePreview = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#312e81]">
      <div className="flex h-full flex-col items-center justify-center px-5 text-center">
        <div className="flex items-center gap-2">
          <FaGamepad className="text-sm text-violet-400" />

          <span className="text-[11px] font-black text-white">
            Rock Paper Scissors
          </span>
        </div>

        <p className="mt-1 text-[7px] text-violet-200/60">Make your move</p>

        <div className="mt-4 flex items-center gap-8">
          <div>
            <p className="text-[7px] uppercase text-violet-300">You</p>

            <p className="text-2xl font-black text-white">3</p>
          </div>

          <div className="text-sm font-bold text-white/20">VS</div>

          <div>
            <p className="text-[7px] uppercase text-pink-300">CPU</p>

            <p className="text-2xl font-black text-white">2</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
            ✊
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/20 text-xl">
            ✋
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
            ✌️
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-violet-500 px-8 py-1.5 text-[7px] font-bold text-white">
          YOU WIN!
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   NEXPLAY — COMING SOON
========================================================= */

const NexPlayPreview = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#06111f] via-[#0b1830] to-[#101827]">
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
          <FaTrophy className="text-lg text-cyan-400" />
        </div>

        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-cyan-400">
          Sports Platform
        </p>

        <h3 className="mt-1 text-xl font-black text-white">NexPlay</h3>

        <div className="mt-3 flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5">
          <FaClock className="text-[8px] text-yellow-400" />

          <span className="text-[8px] font-semibold text-yellow-400">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
};

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
      return null;
  }
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5">
      {/* PREVIEW */}
      <div className="h-[190px] w-full overflow-hidden">
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

        {/* ACTIONS */}
        <div className="mt-5 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2.5 text-xs font-semibold text-slate-300 transition-all hover:border-cyan-400/40 hover:text-white"
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
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-3 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-cyan-300"
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
