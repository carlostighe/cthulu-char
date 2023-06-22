import "swiper/css";
import "swiper/css/scrollbar";

import React, { useEffect, useRef, useState } from "react";

import CharacterCard from "./CharacterCard";
import CharacterSkills from "./CharacterSkills";

const CharacterSheet = ({ characterData }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current.addEventListener("progress", (e) => {
    //   const [swiper, progress] = e.detail;
    // });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="false"
      pagination="false"
      scrollbar="true"
    >
      <swiper-slide>
        <CharacterCard characterData={characterData} />
      </swiper-slide>
      <swiper-slide>
        <CharacterSkills characterData={characterData} />
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
};

export default CharacterSheet;
