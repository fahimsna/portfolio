import { motion } from "framer-motion";

const SkillCard = ({ category, items }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
    >
      <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm hover:bg-cyan-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
