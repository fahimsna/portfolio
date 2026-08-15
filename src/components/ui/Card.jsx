const Card = ({ children }) => {
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">
      {children}
    </div>
  );
};

export default Card;
