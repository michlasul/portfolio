import Menu from "../ui/Menu";
import Button from "../ui/Button";

const changeColor = () => {};

const Header = () => {
  return (
    <header className="py-2.5">
      <div className="flex mx-auto w-full max-w-7xl justify-between items-center px-5">
        {/* this is your logo */}
        <div className="basis-1/4">
          <p className="text-md font-semibold items-center">
            Davies Holmes
            <span className="text-xs font-light py-1 px-2 bg-green-400 rounded-full ms-2">
              Web Developer
            </span>
          </p>
        </div>
        <div className="basis-1/4 grow">
          <Menu />
        </div>
        <div className="basis-1/4 flex justify-end">
          <Button>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
