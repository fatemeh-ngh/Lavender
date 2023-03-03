import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

const DropDowns = ({ items, name }) => {
  return (
    <Dropdown menu={{ items }} autoAdjustOverflow={false} placement="bottom">
      <a>
        {name}
        <DownOutlined style={{ fontSize: "10px", marginRight: "5px" }} />
      </a>
    </Dropdown>
  );
};

export default DropDowns;
