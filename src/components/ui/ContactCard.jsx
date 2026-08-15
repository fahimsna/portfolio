const ContactCard = ({ icon, title, value, link }) => {
  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="bg-[#111827] border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition block"
    >
      <div className="text-cyan-400 text-3xl mb-4">{icon}</div>

      <h3 className="text-white text-xl font-semibold">{title}</h3>

      <p className="text-slate-400 mt-2 break-all">{value}</p>
    </a>
  );
};

export default ContactCard;
