import React, { useState } from "react";
import { CDNURL } from "../../constants/const";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../hook/useOnlinestatus";

function Header() {
  const [btn, setBtn] = useState("Login");
  const handleButton = () => {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };
  const status = useOnlinestatus();

  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-lg mb-16">
      <div className="w-96 pl-20">
        <img src={CDNURL.LOGO_URL} alt="App Logo" className="w-7/12" />
      </div> 
      <div className="flex justify-between w-1/2">
        <ul className="flex flex-row w-full justify-around items-center text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="border-4 w-40 py-2 rounded-lg shadow-lg" onClick={handleButton}>
            {btn}
          </button>
          <li
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: status === false ? "red" : "green" }}
          >
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
