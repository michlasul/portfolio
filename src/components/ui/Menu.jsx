import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex justify-center gap-x-5">
      <MenuItem>
        <a href="#">Home</a>
      </MenuItem>
      <MenuItem>
        <a href="#">Projects</a>
      </MenuItem>
      <MenuItem>
        <a href="#">Contact</a>
      </MenuItem>
    </ul>
  );
};

export default Menu;
