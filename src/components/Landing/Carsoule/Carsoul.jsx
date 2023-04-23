import React from "react";

import { Carousel } from "antd";
import { Damnoosh1, Damnoosh2 } from "./Damnoosh";

const Carsoul = ({item1, item2}) => {
  return (
    <div>
      <Carousel autoplay dots={true} className="bg-primaryColo h-80">
        <>{item1}</>
        <>{item2}</>
      </Carousel>
    </div>
  );
};

export default Carsoul;
