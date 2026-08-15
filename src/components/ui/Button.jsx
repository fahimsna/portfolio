const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
