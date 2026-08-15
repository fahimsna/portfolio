import { motion } from "framer-motion";

const TimelineItem = ({ role, company, duration, responsibilities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 pb-12 border-l border-slate-700"
    >
      {/* Circle */}
      <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

      <h3 className="text-2xl font-bold text-white">{role}</h3>

      <p className="text-cyan-400 mt-1 font-medium">{company}</p>

      <p className="text-slate-500 text-sm mt-1">{duration}</p>

      <ul className="mt-5 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-slate-300 flex items-start gap-3">
            <span className="text-cyan-400 mt-1">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimelineItem;
