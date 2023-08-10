import { useState } from "react";
import "./App.css";
import { Popup } from "./Popup";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState();
  const [city, setCity] = useState("");
  const [popup, setPopup] = useState(false);

  const calculate_age = (birthday) => {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };

  function handleSubmitForm(e) {
    e.preventDefault();
    setAge(calculate_age(birthday));
    setPopup(true);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmitForm}>
        <div>
          <div>
            <label htmlFor="">ชื่อ</label>
            <input
              type="text"
              placeholder="ชื่อ"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              maxLength="50"
              required
            />
          </div>
          <div>
            <label htmlFor="">นามสกุล</label>
            <input
              type="text"
              placeholder="นามสกุล"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              maxLength="70"
              required
            />
          </div>
          <div>
            <label htmlFor="">วัน-เดือน-ปี เกิด</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              min="1950-01-01"
              max="2023-08-01"
              required
            />
          </div>
          <div>
            <label>ประเทศที่อาศัย</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="Thai">Thai</option>
              <option value="Singapore">Singapore</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Lao">Lao</option>
              <option value="England">England</option>
            </select>
          </div>
          <button type="submit">ตกลง</button>
        </div>
      </form>
      {popup ? (
        <Popup
          firstName={firstName}
          lastName={lastName}
          city={city}
          age={age}
          closePopup={() => setPopup(false)}
        />
      ) : null}
    </div>
  );
}

export default App;
