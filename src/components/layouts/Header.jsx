const Header = () => {
  return (
    <header>
      <div className="flex mx-auto w-full max-w-7xl justify-between items-center px-5">
        {/* this is your logo */}
        <div className="basis-[25%] bg-amber-300">
          <h6 className=" text-md font-semibold">Davies Holmes</h6>
          <span className="text-sm">Web Designer</span>
        </div>
        <div className="basis-[25%] grow bg-blue-300 items-stretch">
          <ul className="flex gap-x-4">
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
        </div>
        <div className="basis-[25%] flex justify-end bg-fuchsia-300">
          hello world
        </div>
      </div>
    </header>
  );
};

export default Header;
