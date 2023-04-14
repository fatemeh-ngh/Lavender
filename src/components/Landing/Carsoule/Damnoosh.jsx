import React from "react";
import Item from "./Item";

//image
import pic1 from "../../../assets/pictures/1.jpeg";
import pic2 from "../../../assets/pictures/2.jpeg";
import pic3 from "../../../assets/pictures/3.jpeg";
import pic4 from "../../../assets/pictures/4.jpeg";
import pic5 from "../../../assets/pictures/5.jpeg";
import pic6_1 from "../../../assets/pictures/6.1.jpg";
import pic6_2 from "../../../assets/pictures/6.2.jpeg";
import pic7_1 from "../../../assets/pictures/7.1.jpeg";
import pic7_2 from "../../../assets/pictures/7.2.jpeg";
import pic8 from "../../../assets/pictures/8.jpeg";
import pic9_1 from "../../../assets/pictures/9.1.jpeg";
import pic9_2 from "../../../assets/pictures/9.2.jpeg";
import pic10 from "../../../assets/pictures/10.jpeg";

const d1 = [
  {
    id: 1,
    pic: pic1,
    name: "دمنوش نعنا",
    price: "۲۷,۵۰۰ تا ۴۰,۰۰۰ تومان",
  },
  {
    id: 2,
    pic: pic2,
    name: "دمنوش بابونه",
    price: "۴۰,۰۰۰ تا ۶۴,۰۰۰ تومان",
  },
  {
    id: 3,
    pic: pic3,
    name: "دمنوش غنچه گل محمدی",
    price: "۴۰,۰۰۰ تا ۶۴,۰۰۰ تومان",
  },
  {
    id: 4,
    pic: pic4,
    name: "دمنوش اسطوخودوس",
    price: "۵۳,۰۰۰ تا ۹۰,۰۰۰ تومان",
  },
  {
    id: 5,
    pic: pic5,
    name: "دمنوش به لیمو",
    price: "۲۴,۰۰۰ تا ۳۳,۰۰۰ تومان",
  },
];

const d2 = [
  {
    id: 6,
    pic: pic6_1,
    name: "دمنوش گل گاوزبان",
    price: "۳۰,۰۰۰ تا ۴۴,۰۰۰ تومان",
  },
  {
    id: 7,
    pic: pic7_1,
    name: "دمنوش گل ختمی",
    price: "۵۰,۰۰۰ تا ۸۴,۰۰۰ تومان",
  },
  {
    id: 8,
    pic: pic8,
    name: "چای ترش",
    price: "۴۰,۰۰۰ تا ۶۴,۰۰۰ تومان",
  },
  {
    id: 9,
    pic: pic9_1,
    name: "چای ترش",
    price: "۴۰,۰۰۰ تا ۶۴,۰۰۰ تومان",
  },
  {
    id: 10,
    pic: pic10,
    name: "دمنوش بهارنارنج",
    price: "۳۲,۵۰۰ تا ۵۰,۰۰۰ تومان",
  },
];

export const Damnoosh1 = () => {
  return (
    <div className=" flex justify-center p-5">
      {d1.map((item) => {
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

export const Damnoosh2 = () => {
  return (
    <div className="flex justify-center p-5">
      {d2.map((item) => {
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
