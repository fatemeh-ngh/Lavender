import React from "react";

import { Carousel } from "antd";
import { Damnoosh1, Damnoosh2 } from "./Damnoosh";
import Item from "./Item";

const Carsoul = () => {
  return (
    <div>
      <Carousel autoplay dots={true} className="bg-primaryColo h-80">
        <Damnoosh1 />
        <Damnoosh2 />
      </Carousel>
    </div>
  );
};

export default Carsoul;
