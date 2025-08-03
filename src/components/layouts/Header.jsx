import Menu from "../ui/Menu";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="border-b border-slate-200 py-2.5">
      <div className="flex mx-auto w-full max-w-7xl justify-between items-center px-5">
        {/* this is your logo */}
        <div className="basis-[25%]">
          <h6 className="text-md font-semibold">Davies Holmes</h6>
          <span className="text-sm">Web Designer</span>
        </div>
        <div className="basis-[25%] grow">
          <Menu />
        </div>
        <div className="basis-[25%] flex justify-end">
          <Button>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
