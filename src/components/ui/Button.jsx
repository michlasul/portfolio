const Button = ({ children }) => {
  return (
    <a
      href="mailto:muhammadichlasulamal00@gmail.com"
      className="px-5 py-2 bg-slate-800 text-slate-50 hover:bg-slate-600 rounded-md"
    >
      {children}
    </a>
  );
};

export default Button;
