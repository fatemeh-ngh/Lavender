import React from "react";

//components
import Header from "../components/Haeder/Header";
//image
import landing from '../assets/pictures/landing.jpg';

const Landing = () => {
  return (
    <div className="relative">
      <Header />
      <div className="bg-landing bg-co bg-center w-full h-[380px] relative before:w-full before:h-[380px] before:absolute before:bg-[#2f204987] before:top-0 bg-primaryColor">
      </div>
      <div className="absolute bottom-24 left-1/3 space-y-2 text-center">
            <p className=" text-[50px] text-white">محصولات گیاهی لاوِندِر</p>
            <p className=" text-white text-lg">​​لذت خرید دمنوش، روغن های گیاهی و عرقیات گیاهی با کیفیت بالا</p>
            <button className=" bg-[#b19ed771] py-1 px-3 rounded-xl text-white text-lg hover:bg-[#b491fb71]">مشاهده همه محصولات</button>
        </div>
    </div>
  );
};

export default Landing;
