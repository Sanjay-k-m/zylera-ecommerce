import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
        Discover Your Style
      </Title>
      <p className="text-center text-sm text-custom-lightColor/80 font-medium max-w-[480px]">
        Elevate your wardrobe with our exclusive fashion pieces, designed to make you stand out.
      </p>
    </div>
     );
};

export default HomeBanner;
 