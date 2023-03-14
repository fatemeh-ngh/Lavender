import React from 'react';

//image
import pic1 from '../../assets/pictures/1.jpeg';
import pic2 from '../../assets/pictures/2.jpeg';
import pic3 from '../../assets/pictures/3.jpeg';
import pic4 from '../../assets/pictures/4.jpeg';
import pic5 from '../../assets/pictures/5.jpeg';
import pic6_1 from '../../assets/pictures/6.1.jpg';
import pic6_2 from '../../assets/pictures/6.2.jpeg';
import pic7_1 from '../../assets/pictures/7.1.jpeg';
import pic7_2 from '../../assets/pictures/7.2.jpeg';
import pic8 from '../../assets/pictures/8.jpeg';
import pic9_1 from '../../assets/pictures/9.1.jpeg';
import pic9_2 from '../../assets/pictures/9.2.jpeg';
import pic10 from '../../assets/pictures/10.jpeg';

import { Carousel } from 'antd';
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const Carsoul = () => {
    return (
        <Carousel autoplay dots={false} className=' bg-primaryColor w-full h-80 overflow-hidden'>
        <div className=' flex '>
          <img src={pic1}/>
          <img src={pic2}/>
          <img src={pic3}/>
          <img src={pic4}/>
          <img src={pic5}/>
        </div>
        <div className=' flex'>
          <img src={pic6_1}/>
          <img src={pic7_1}/>
          <img src={pic8}/>
          <img src={pic9_1}/>
          <img src={pic10}/>
        </div>
      </Carousel>
    );
};

export default Carsoul;