import "./App.css";
import Header from "./components/layouts/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="max-w-7xl w-full mx-auto px-5 py-12">
          <h1 className="font-bold text-5xl">Hello World</h1>
        </div>
      </div>
    </>
  );
}

export default App;
