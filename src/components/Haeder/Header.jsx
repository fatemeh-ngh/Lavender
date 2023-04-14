import React from "react";

//Components
import LogoSearchLogin from "./logoSearchLogin";
import Navbar from "./Navbar";

const Haeder = () => {
  return (
    <>
      <div className=" flex justify-between items-center px-24 text-md bg-primaryColor w-full h-6 text-white">
        <p>ارسال رایگان خریدهای بالای ۸۰۰ هزار تومان</p>
        <p>تماس با ما</p>
      </div>
      <LogoSearchLogin/>
      <Navbar/>
    </>
  );
};

export default Haeder;
