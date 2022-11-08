import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import { Button } from "antd";

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div className="containeer22">
        <InputShortener setInputValue={setInputValue} />
        <BackgroundAnimate />
        <LinkResult inputValue={inputValue} />
      </div>
      Name : {user?.name}
      <br />
      Email : {user?.email}
      <div className="inputContainer">
        <button
          className="buttonn"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          type="primary"
        >
          <a href="/login">Logout</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
