import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex justify-center gap-x-5">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default Menu;
