import React from 'react';

//images
import logo from '../assets/pictures/logo.png';
import lavender from '../assets/pictures/lavender.jpeg';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Navbar = () => {
    return (
        <>
        <div className=' flex justify-between items-center px-24 text-sm bg-primaryColor w-full h-6 text-white'>
            <p>ارسال رایگان خریدهای بالای ۵۰۰ هزار تومان</p>
            <p>تماس با ما</p>
        </div>
        <div className=' flex justify-between items-center px-24 pt-6'>
            <div className='flex items-center'>
                <input className=' w-40 h-7 pr-4 bg-[#f5f5f5] outline-none rounded-r-xl text-lg' type="text"  placeholder='جست و جو در لاوندر...'/>
                <button className=' bg-[#ececec] px-4  h-7 rounded-l-xl text-md text-primaryColor'>جستجو</button>
            </div>
            <div className='flex flex-col items-center bg-white '>
                <img src={logo} alt="" />
                <img src={lavender} alt="" />
                <p className=' text-xs text-primaryColor'>محصولات گیاهی و خانگی لاوندر</p>
            </div>
            <div className=' flex'>
                <div className=' bg-[#d9cce6] rounded-xl p-2 w-28 text-center text-md text-primaryColor'>
                    <button className='pl-1 '>ورود</button>
                    /
                    <button className='pr-1'>ثبت نام</button>
                </div>
                <ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} className=' text-primaryColor mr-4'/>
            </div>
        </div>
        </>
    );
};

export default Navbar;