import React from "react";

//components
import Header from "../components/Haeder/Header";
import Carsoul from "../components/Landing/Carsoule/Carsoul";
import { Damnoosh1, Damnoosh2 } from "../components/Landing/Carsoule/Damnoosh";
import { Chocolate1, Chocolate2 } from "../components/Landing/Carsoule/chocolate";

//image
import landing from "../assets/pictures/landing.jpg";

const Landing = () => {
  return (
    <div className="relative">
      <Header />
      <div className="bg-landing bg-co bg-center w-full h-[380px] relative before:w-full before:h-[380px] before:absolute before:bg-[#2f20496f] before:top-0 bg-primaryColor"></div>
      <div className="absolute space-y-2 text-center top-64 left-1/3">
        <p className="text-[45px] text-white">محصولات گیاهی لاوِندِر</p>
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
      <Carsoul item1={<Damnoosh1/>} item2={<Damnoosh2/>}/>
      <div className="flex mx-20 justify-between h-[200px] mb-10">
        <div className=" bg-21 bg-top flex flex-col justify-center pr-4 w-[580px] rounded-xl shadow-lg space-y-1">
          <p className=" text-[20px] text-[#351c75] font-bold">روغن های گیاهی خالص</p>
          <p className=" text-[20px] text-[#351c75]">برای آشپزی و پخت و پز</p>
          <button className="px-3 py-1 text-white text-md rounded-xl bg-primaryColor w-fit">مشاهده روغن ها</button>
        </div>
        <div className="pr-4 bg-22 bg-top flex flex-col justify-center w-[580px] rounded-xl shadow-lg space-y-1">
          <p className="text-[15px] text-[#351c75] font-bold">برای استفاده به صورت موضعی</p>
          <p className="text-[17px] text-[#351c75]">روغن های گیاهی با خواص درمانی</p>
          <button className="px-3 py-1 text-white text-md rounded-xl bg-primaryColor w-fit">مشاهده روغن ها</button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <a href="" className=" text-md text-[#81A934]">شکلات های خارجی</a>
        <a href=""className="text-md text-white mt-2 bg-[#81A934] px-2 py-1 rounded-xl">مشاهده همه</a>
      </div>
      <Carsoul item1={<Chocolate1/>} item2={<Chocolate2/>}/>
      <div className="flex justify-between mx-20 my-10">
        <div className=" bg-33 flex flex-col pt-8 pr-8 space-y-2 w-[350px] h-[250px] rounded-xl shadow-lg">
          <p className=" text-[16px] font-bold text-[#5c33c3]">بهترین ها برای درمان</p>
          <p className=" text-[12px] text-[#5c33c3]">بهترین ها برای کاهش قند و فشار خون</p>
          <button className="text-[14px] bg-[#452595] hover:bg-[#5c33c3] w-fit text-white py-1 px-4 rounded-xl">مشاهده همه</button>
        </div>
        <div className=" bg-34 bg-top flex flex-col pt-8 pr-8 space-y-2 w-[350px] h-[250px] rounded-xl shadow-lg">
          <p className=" text-[20px] font-bold text-[#674ea7]">شاد و پرانرژی باش</p>
          <p className=" text-[12px] text-[#5c33c3]">پیشنهاد های شاد و انرژی بخش لاوندر</p>
          <button className="text-[14px] bg-[#957ed1] hover:bg-[#5c33c3] w-fit text-white py-1 px-4 rounded-xl">مشاهده همه</button>
        </div>
        <div className=" bg-35 flex flex-col pt-8 pr-8 space-y-2 w-[350px] h-[250px] rounded-xl shadow-lg">
          <p className=" text-[20px] font-bold text-[#8e7cc3]">شب ها آروم بخواب</p>
          <p className=" text-[12px] text-[#674ea7]">گلچینی از آرامش بخش های طبیعی</p>
          <button className="text-[14px] bg-[#836fc1] hover:bg-[#5c33c3] w-fit text-white py-1 px-4 rounded-xl">مشاهده همه</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
