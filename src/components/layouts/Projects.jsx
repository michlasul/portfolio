import Card from "../ui/Card";

const Projects = () => {
  return (
    <section>
      <div className="w-full p-5">
        <div className="bg-slate-100 rounded-2xl py-12">
          <div className="max-w-7xl mx-auto px-5 flex flex-col gap-y-5">
            <h4 className="text-2xl font-medium">Meet some of my works</h4>
            <div className="grid grid-cols-3 gap-5">
              <Card
                imgUrl={
                  "https://i.pinimg.com/1200x/a8/58/8b/a8588b6c1e00a261b854cb61dfac8de2.jpg"
                }
                title={"PixelPal"}
                desc={
                  "A playful design collaboration platform for illustrators and UI designers. Create moodboards, share feedback in real time, and turn doodles into deployable assets in one click."
                }
              />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
