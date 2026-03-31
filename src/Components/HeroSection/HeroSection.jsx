import React from "react";
import BannerImg from "../../assets/banner.png";
import Play from "../../assets/play.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center container gap-14 mx-auto justify-between px-6 py-12">
      <div>
        <p className=" btn rounded-full bg-[#E1E7FF ] text-[#4F39F6]">New: AI-Powered Tools Available</p>
        <h1 className=" font-extrabold md:text-[72px] text-[#101727] ">Supercharge Your <br /> Digital Workflow</h1>
        <p className="text-[18px] " >
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-6 mt-6">
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full bg-[#4F39F6] text-white">Explore Products</button>
          <button className="btn rounded-full btn-outline btn-primary"> <img src={Play} alt="Play" /> Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={BannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default HeroSection;
