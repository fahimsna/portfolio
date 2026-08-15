import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const EducationCard = ({ education }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-cyan-400"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <FaGraduationCap size={26} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">
            {education.institution}
          </h3>

          <p className="text-slate-400">{education.degree}</p>

          <p className="text-cyan-400 text-sm mt-1">{education.duration}</p>
        </div>
      </div>

      {education.description && (
        <p className="text-slate-400 mt-6 leading-7">{education.description}</p>
      )}
    </motion.div>
  );
};

export default EducationCard;
