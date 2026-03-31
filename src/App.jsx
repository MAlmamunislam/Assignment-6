import { Suspense, useState } from "react";
import "./App.css";
import HeroSecond from "./Components/HeroSection/HeroSecond";
import HeroSection from "./Components/HeroSection/HeroSection";
import PrimiumDigitSection from "./Components/HeroSection/PrimiumDigitSection";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/MainCardSection/Cards";
import { ToastContainer } from "react-toastify";
import ThreeSteps from "./Components/HeroSection/ThreeSteps";


const cardsData = async () => {
  const response = await fetch("../Data.json");
  const data = await response.json();
  return data;
};

function App() {
  const data = cardsData();
  console.log(data);
  const [products, setProducts] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cart={cart} />
      <HeroSection />
      <HeroSecond />
      <PrimiumDigitSection cart={cart} setCart={setCart} products={products} setProducts={setProducts} />
      <Suspense
        fallback={
          <span className="loading loading-spinner flex justify-center items-center loading-xl"></span>
        }
      >
        <Cards cart={cart} setCart={setCart} products={products} setProducts={setProducts} data={data} />
      </Suspense>
      <ToastContainer />
      <ThreeSteps />
      
    </div>
  );
}

export default App;
