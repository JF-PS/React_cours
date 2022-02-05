import React from 'react';
import seasonPicture from "../assets/pictures/ilustation.png";
import "../style/seasonStyle.css";

const Modal = (props) => {
  const {children} = props;
  // return <div>{children}</div>;
  return (
    <div className="modalContainer">
    <div className="blocks">
      <img
        className="seasonPicture"
        src={seasonPicture}
        alt="seasonPicture"
      />
    </div>
    {children}
  </div>
);
};

export default Modal;
