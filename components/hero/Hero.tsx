import React from "react";
import { Spotlight } from "../spotlight/Spotlight";
import BackgroundGrid from "../background-grid/BackgroundGrid";
import { TextGenerateEffect } from "../text-generate-effect/TextGenerateEffect";
import MagicButton from "../magic-button/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <BackgroundGrid />
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Ready to see a hell of a portfolio?
            </p>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Where Cool Ideas are turned into Killer User Experiences"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">{`Hi there! I'm Mahak, a Frontend Developer and an Artist based in India  `}</p>
            <a href="#about">
              <MagicButton
                title="See my work"
                rightIcon={<FaLocationArrow />}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
