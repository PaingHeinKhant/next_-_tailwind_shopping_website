import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}
const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left=[70px] max-w-[250px] sm:max-w-[350px]"></div>
    </div>
  );
};

export default Slide;
