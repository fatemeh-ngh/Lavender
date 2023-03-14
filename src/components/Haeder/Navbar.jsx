import React from "react";
import { ConfigProvider } from "antd";
import DropDowns from "./DropDowns";

const tea = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          چای
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          دمنوش
        </a>
      ),
    },
  ];
  const coffee = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          دمی چکه ای
        </a>
      ),
    },
  ];
  const oil = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          روغن های گیاهی
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          روغن های خوراکی
        </a>
      ),
    },
  ];
  const butter = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          کره بادام زمینی
        </a>
      ),
    },
  ];

const Navbar = () => {
  return (
    <div className="px-44 mt-6  border-y-[1px] border-[#efebf6]">
      <ul className="flex items-center justify-between text-[14px] text-[#4e3f75] py-4">
        <ConfigProvider
          theme={{
            components: {
              Dropdown: {
                controlItemBgHover: "#613DA941",
                colorText: "#613DA9",
              },
            },
          }}
        >
          <DropDowns name="چای و دمنوش" items={tea} />
          <DropDowns name="قهوه" items={coffee} />
          <li className="cursor-pointer">عرقیات گیاهی</li>
          <DropDowns name="روغن های گیاهی" items={oil} />
          <DropDowns name="کره ها" items={butter} />
          <li className="cursor-pointer">درباره ما</li>
          <li className="cursor-pointer">وبلاگ</li>
        </ConfigProvider>
      </ul>
    </div>
  );
};

export default Navbar;
