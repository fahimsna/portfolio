const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <p className="text-cyan-400 font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
