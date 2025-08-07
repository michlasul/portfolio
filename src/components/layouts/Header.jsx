import Menu from "../ui/Menu";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="py-2.5 bg-white border-b border-slate-200">
      <div className="flex mx-auto w-full max-w-7xl justify-between items-center px-5">
        {/* this is your logo */}
        <div className="basis-1/2 sm:basis-1/4 order-1 grow md:grow-0">
          <p className="text-md font-semibold items-center">
            Davies Holmes
            <span className="inline-block text-xs font-medium py-1 px-2 bg-slate-800 text-white rounded-full sm:ms-2">
              Web Developer
            </span>
          </p>
        </div>
        <div className="basis-fit order-3 md:basis-1/4">
          <Menu />
        </div>
        <div className="basis-fit order-2 sm:flex md:order-3 md:basis-1/4 md:justify-end">
          <Button>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
