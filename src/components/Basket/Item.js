import React from "react";
import Image from "../../assets/images/colours/Alabaster.jpg";

const Item = ({ item }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "130px",
        height: "240px",
        margin: "15px",
        borderRadius: "5px 5px",
        padding: "5px 5px",
      }}
    >
      <p
        style={{
          float: "right",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "5px",
        }}
      >
        X
      </p>
      <img src={Image} style={{ borderRadius: "5px", marginBottom: "5px" }} />

      <p style={{ fontSize: "13px", textAlign: "center", color: "grey" }}>
        Alabaster Aldridge Door
      </p>
      <p style={{ fontSize: "13px", textAlign: "center", color: "grey" }}>
        700x700mm
      </p>
      <p
        style={{
          fontSize: "14px",
          textAlign: "center",
          color: "grey",
          fontWeight: "bold",
        }}
      >
        £34.98
      </p>
    </div>
  );
};

export default Item;
