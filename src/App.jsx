import { Suspense, useState } from "react";
import "./App.css";
import HeroSecond from "./Components/HeroSection/HeroSecond";
import HeroSection from "./Components/HeroSection/HeroSection";
import PrimiumDigitSection from "./Components/HeroSection/PrimiumDigitSection";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/MainCardSection/Cards";


const cardsData = async () => {
  const response = await fetch("../Data.json");
  const data = await response.json();
  return data;
};

function App() {
  const data = cardsData();
  console.log(data);
  const [products, setProducts] = useState(true);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSecond />
      <PrimiumDigitSection products={products} setProducts={setProducts} />
      <Suspense
        fallback={
          <span className="loading loading-spinner flex justify-center items-center loading-xl"></span>
        }
      >
        <Cards products={products} setProducts={setProducts} data={data} />
      </Suspense>
      
    </div>
  );
}

export default App;
