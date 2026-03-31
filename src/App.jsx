import "./App.css";
import HeroSecond from "./Components/HeroSection/HeroSecond";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
   <div>
    <Navbar />
    <HeroSection />
    <HeroSecond/>
   </div>
  );
}

export default App;
