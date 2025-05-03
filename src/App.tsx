import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/AppContext"; // Import CartProvider

function App() {
  return (
    <CartProvider>
      {" "}
      <div className="flex flex-col justify-center items-center relative">
        <Navbar />
        <Content />
      </div>
    </CartProvider>
  );
}

export default App;
