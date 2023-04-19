import React from "react";

//components
import Header from "../components/Haeder/Header";
import Carsoul from "../components/Landing/Carsoule/Carsoul";

//image
import landing from "../assets/pictures/landing.jpg";

const Landing = () => {
  return (
    <div className="relative">
      <Header />
      <div className="bg-landing bg-co bg-center w-full h-[380px] relative before:w-full before:h-[380px] before:absolute before:bg-[#2f20496f] before:top-0 bg-primaryColor"></div>
      <div className="absolute space-y-2 text-center top-64 left-1/3">
        <p className=" text-[45px] text-white">محصولات گیاهی لاوِندِر</p>
        <p className="text-lg text-white ">
          ​​لذت خرید دمنوش، روغن های گیاهی و عرقیات گیاهی با کیفیت بالا
        </p>
        <button className=" bg-[#b19ed771] py-1 px-3 rounded-xl text-white text-lg hover:bg-[#b491fb71]">
          مشاهده همه محصولات
        </button>
      </div>
      <div className="flex flex-col items-center mt-5">
        <a href="" className=" text-md text-[#81A934]">
          دمنوش های گیاهی
        </a>
        <a
          href=""
          className="text-md text-white mt-2 bg-[#81A934] px-2 py-1 rounded-xl"
        >
          مشاهده همه
        </a>
      </div>
      <Carsoul />
      <div className="flex mx-20 justify-between h-[200px] mb-10">
        <div className=" bg-21 bg-cover flex flex-col justify-center pr-4 w-[580px] rounded-xl shadow-lg space-y-1">
          <p className=" text-[20px] text-[#351c75] font-bold">روغن های گیاهی خالص</p>
          <p className=" text-[20px] text-[#351c75]">برای آشپزی و پخت و پز</p>
          <button className="px-3 py-1 text-white text-md rounded-xl bg-primaryColor w-fit">مشاهده روغن ها</button>
        </div>
        <div className="pr-4 bg-22 bg-cover flex flex-col justify-center  w-[580px] rounded-xl shadow-lg space-y-1">
          <p className="text-[15px] text-[#351c75] font-bold">برای استفاده به صورت موضعی</p>
          <p className="text-[17px] text-[#351c75]">روغن های گیاهی با خواص درمانی</p>
          <button className="px-3 py-1 text-white text-md rounded-xl bg-primaryColor w-fit">مشاهده روغن ها</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
