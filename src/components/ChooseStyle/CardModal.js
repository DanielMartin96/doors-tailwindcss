import React, { useState } from "react";

import Modal from "./Modal";

const CardModal = ({ image, setStyle, setActive }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div onClick={() => setModalShow(true)} className="cursor-pointer m-2">
        <div
          style={{
            backgroundColor: "#808080",
            color: "white",
            fontSize: "14px",
            padding: "10px 0 10px 0",
            borderTopLeftRadius: "10px 10px",
            borderTopRightRadius: "10px 10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <p>{image.name}</p>
        </div>
        <div
          className="bg-white"
          style={{
            borderBottomLeftRadius: "10px 10px",
            borderBottomRightRadius: "10px 10px",
            padding: "15px 0 15px 0",
          }}
        >
          <img src={image.src} alt={image.name} style={{ height: "250px" }} />
        </div>
      </div>
      <Modal
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CardModal;
