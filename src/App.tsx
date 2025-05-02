import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;
