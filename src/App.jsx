import "./App.css";
import Header from "./components/layouts/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="bg-green-300 flex">
        <div className="max-w-5xl w-full mx-auto px-[10px] py-12">
          <h1 className="font-bold text-5xl">Hello World</h1>
        </div>
      </div>
    </>
  );
}

export default App;
