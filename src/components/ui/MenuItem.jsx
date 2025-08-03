const MenuItem = ({ href, children }) => {
  return (
    <li className="text-slate-800 hover:text-blue-500 cursor-pointer">
      <a href={href}>{children}</a>
    </li>
  );
};

export default MenuItem;
