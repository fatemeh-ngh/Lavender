import React from "react";
import { Tooltip } from "antd";
//images
import logo from "../../assets/pictures/lavenderlogo.svg";
import lavender from "../../assets/pictures/lavender.jpeg";
import { ShoppingOutlined } from "@ant-design/icons";

const LogoSearchLogin = () => {
  return (
    <div className=" flex justify-between items-center px-24 pt-4">
      <div className="flex items-center">
        <input
          className=" w-40 h-7 pr-4 bg-[#f5f5f5] outline-none rounded-r-xl text-lg"
          type="text"
          placeholder="جست و جو در لاوندر..."
        />
        <button className="bg-[#ececec] px-4  h-7 rounded-l-xl text-md text-primaryColor hover:text-white hover:bg-primaryColor">
          جستجو
        </button>
      </div>
      <div className="flex flex-col items-center bg-white ">
        <Tooltip title="لوگوی لاوندر" color="#613DA9" placement="left">
          <img src={logo} alt="logo" className="w-10" />
        </Tooltip>
        <p className="text-xl mt-1 text-primaryColor font-serif">
          Lavender
        </p>
      </div>
      <div className="flex">
        <div className="bg-[#d9cce6] rounded-xl text-center self-center py-[7px] px-6 text-md text-primaryColor">
          <button className="hover:text-white">ورود</button>/
          <button className="hover:text-white">ثبت نام</button>
        </div>
        <ShoppingOutlined
          className="text-primaryColor mr-4 cursor-pointer"
          style={{ fontSize: "40px" }}
        />
      </div>
    </div>
  );
};

export default LogoSearchLogin;
