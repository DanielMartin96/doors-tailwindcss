import React from "react";

const Modal = (props) => {
  return (
    <div {...props} style={{ display: props.show ? "block" : "none" }}>
      <h1>{props.image.name}</h1>
      <hr />
      <img src={props.image.src} alt={props.image.name} />
      <hr />
      <div>
        <button
          onClick={() => {
            props.onHide();
            props.setStyle(props.image.name);
            props.setActive(3);
          }}
        >
          Select
        </button>
        <button onClick={() => props.onHide()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
