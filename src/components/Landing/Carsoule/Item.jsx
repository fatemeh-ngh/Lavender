import React from "react";
import pic1 from "../../../assets/pictures/1.jpeg";

const Item = ({pic, name, price}) => {
  return (
    <div className="flex flex-col items-center mx-1">
      <img className="w-[212px]" src={pic} />
      <p className=" text-[18px]">{name}</p>
      <p className=" text-[#674EA7] text-[15px] my-2">{price}</p>
      <button className=" bg-[#81A934] py-1 px-2 text-white text-[14px] rounded-xl hover:bg-primaryColor">افزودن به سبد خريد</button>
    </div>
  );
};

export default Item;
