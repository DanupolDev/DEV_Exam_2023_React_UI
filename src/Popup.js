import React from "react";
import "./Popup.css";
export const Popup = ({ firstName, lastName, country, age, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h2>
          สวัสดีคุณ : {firstName} {lastName}
        </h2>
        <h2>คุณมาจากประเทศ : {country}</h2>
        <h2>คุณอายุ : {age} ปี</h2>
        <button onClick={closePopup}>ปิด</button>
      </div>
    </div>
  );
};
