import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex justify-center gap-x-5">
      <MenuItem>Home</MenuItem>
      <MenuItem>Projects</MenuItem>
      <MenuItem>Contact</MenuItem>
    </ul>
  );
};

export default Menu;
