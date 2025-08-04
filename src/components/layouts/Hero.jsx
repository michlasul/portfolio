const Hero = () => {
  return (
    <section className="py-12">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="md:max-w-2/3 flex flex-col gap-y-4 text-slate-900">
          <p className="text-xl m-0.5">
            Founder of <span className="font-semibold">Develent</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-normal leading-14 md:leading-16">
            Hey, I'm{" "}
            <img
              src="../../../src/assets/my-profile-photo.jpg"
              alt="me"
              className="w-14 lg:w-16 rounded-xl inline bg-slate-200 p-1 shadow-2xl shadow-gray-600 -rotate-3 hover:rotate-3 transition-transform ease-in-out duration-500"
            />{" "}
            <span className="font-semibold">Davies.</span>{" "}
            <span className="block font-normal">
              I turn your <span className="font-semibold">business</span> into a{" "}
              <span className="font-semibold ">
                wonderful online experience
              </span>{" "}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
