const Button = ({ children }) => {
  return (
    <a
      href="mailto:muhammadichlasulamal00@gmail.com"
      className="px-5 py-2 text-sm bg-slate-800 text-slate-50 hover:bg-blue-500 rounded-md"
    >
      {children}
    </a>
  );
};

export default Button;
