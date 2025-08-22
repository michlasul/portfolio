import "./App.css";
import Header from "./components/layouts/Header.jsx";
import Hero from "./components/layouts/Hero.jsx";
import Projects from "./components/layouts/Projects.jsx";
import Blog from "./components/layouts/Blog.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="bg-blue-50 py-16">
        <div className="flex flex-col gap-5 mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-medium">Read my blogs</h2>
          <Blog />
        </div>
      </section>
      <Projects />
    </>
  );
}

export default App;
