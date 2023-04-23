import React from "react";
import Item from "./Item";

//image
import pic23 from "../../../assets/pictures/23.jpg";
import pic24 from "../../../assets/pictures/24.jpg";
import pic25 from "../../../assets/pictures/25.jpg";
import pic26 from "../../../assets/pictures/26.jpg";
import pic27 from "../../../assets/pictures/27.jpg";
import pic28 from "../../../assets/pictures/28.jpg";
import pic29 from "../../../assets/pictures/29.jpg";
import pic30 from "../../../assets/pictures/30.jpg";
import pic31 from "../../../assets/pictures/31.jpg";
import pic32 from "../../../assets/pictures/32.jpg";

const ch1 = [
  {
    id: 1,
    pic: pic23,
    name: "شکلات کیت کت چانکی",
    price: "۲۹,۰۰۰ تومان",
  },
  {
    id: 2,
    pic: pic24,
    name: "نوتلا آلمان ۸۲۵ گرم",
    price: "۴۸۹,۰۰۰ تومان",
  },
  {
    id: 3,
    pic: pic25,
    name: "کوکی کره ای دانیسا ۳۷۵",
    price: "۲۹۹,۰۰۰ تومان",
  },
  {
    id: 4,
    pic: pic26,
    name: "کرم بیسکوئیت لوتوس ۴",
    price: "۱۹۹,۰۰۰ تومان ",
  },
  {
    id: 5,
    pic: pic27,
    name: "شکلات صبحانه نوتلا ایتال",
    price: "۱۹۹,۰۰۰ تومان ",
  },
];

const ch2 = [
  {
    id: 6,
    pic: pic28,
    name: "شکلات هوبی ۳۰ گرمی",
    price: "۱۱,۰۰۰ تومان",
  },
  {
    id: 7,
    pic: pic29,
    name: "شکلات بونتی نارگیلی",
    price: "۲۹,۰۰۰ تومان",
  },
  {
    id: 8,
    pic: pic30,
    name: "شکلات اسنیکرز",
    price: "۲۹,۰۰۰ تومان",
  },
  {
    id: 9,
    pic: pic31,
    name: "شکلات مارس",
    price: "۲۵,۰۰۰ تومان",
  },
  {
    id: 10,
    pic: pic32,
    name: "شکلات کیت کت چانکی",
    price: "۲۹,۰۰۰ تومان",
  },
];

export const Chocolate1 = () => {
  return (
    <div className=" flex justify-center p-5">
      {ch1.map((item) => {
        return (
          <Item
            key={item.id}
            pic={item.pic}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export const Chocolate2 = () => {
  return (
    <div className="flex justify-center p-5">
      {ch2.map((item) => {
        return (
          <Item
            key={item.id}
            pic={item.pic}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
