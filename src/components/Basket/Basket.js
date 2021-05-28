import React from "react";
import Item from "./Item";
import "./Basket.css";

const Basket = () => {
  return (
    <div style={{ marginLeft: "10px", position: "fixed" }} className="basket">
      <div
        style={{
          backgroundColor: "#58595b",
          padding: "2px",
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          borderBottom: "8px solid #c2b59c",
          borderTopLeftRadius: "10px 10px",
          borderTopRightRadius: "10px 10px",
        }}
      >
        <p style={{ margin: "10px 0" }}>Basket</p>
      </div>
      <div
        style={{
          backgroundColor: "#e7e7e7",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Basket;
