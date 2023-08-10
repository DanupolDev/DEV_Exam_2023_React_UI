import React from "react";
import "./Popup.css";
export const Popup = ({ firstName, lastName, city, age, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h2>
          สวัสดีคุณ : {firstName} {lastName}
        </h2>
        <h2>คุณมาจากประเทศ : {city}</h2>
        <h2>คุณอายุ : {age} ปี</h2>
        <button onClick={closePopup}>ปิด</button>
      </div>
    </div>
  );
};
