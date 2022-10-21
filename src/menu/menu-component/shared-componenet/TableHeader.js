import React from "react";
import backarrow from "../../../assets/menu/images/backarrow.svg";
import order from "../../../assets/menu/images/order.svg";
import { Link } from "react-router-dom";

const TableHeader = (props) => {
  const handleBackClick = () => {
    if (props.menuPage === "Menu") {
      props.handleMenuPageChange("MenuCategory");
    } else if (props.menuPage === "SpecificItem") {
      props.handleMenuPageChange("Menu");
    }
  };

  return (
    <div className="table--top--container">
      <div className="menu--back--arrow" onClick={handleBackClick}>
        <img src={backarrow} alt="order"></img>
      </div>
      <div className="table--title">Table No. 8</div>
      <div className="menu--ordericon">
        <Link to="/foodorder">
          <img src={order} alt="order"></img>
        </Link>
      </div>
    </div>
  );
};

export default TableHeader;
