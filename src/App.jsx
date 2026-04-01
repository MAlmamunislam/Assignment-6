import { Suspense, useState } from "react";
import "./App.css";
import HeroSecond from "./Components/HeroSection/HeroSecond";
import HeroSection from "./Components/HeroSection/HeroSection";
import PrimiumDigitSection from "./Components/HeroSection/PrimiumDigitSection";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/MainCardSection/Cards";
import { ToastContainer } from "react-toastify";
import ThreeSteps from "./Components/HeroSection/ThreeSteps";
import TransparentPricing from "./Components/HeroSection/TransparentPricing";
import TransfromWorkflow from "./Components/HeroSection/TransfromWorkflow";
import Fotter from "./Components/Fotter/Fotter";

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
      <PrimiumDigitSection
        cart={cart}
        setCart={setCart}
        products={products}
        setProducts={setProducts}
      />
      <Suspense
        fallback={
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner  w-50 h-50 loading-xl"></span>
          </div>
        }
      >
        <Cards
          cart={cart}
          setCart={setCart}
          products={products}
          setProducts={setProducts}
          data={data}
        />
      </Suspense>
      <ToastContainer />
      <ThreeSteps />
      <TransparentPricing />
      <TransfromWorkflow />
      <Fotter/>
    </div>
  );
}

export default App;
