import React from "react";
import HeaderStyle from "./HeaderStyle.module.css";

const Header = () => {
    const handleMouseOver = () => {
        document.getElementById("headerContainer").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("navigationContainer").style.backgroundColor = "rgb(10, 20, 20)";
    }
    const handleMouseOut = () => {
        document.getElementById("headerContainer").style.backgroundColor = "transparent";
        document.getElementById("navigationContainer").style.backgroundColor = "transparent";
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} id="headerContainer" className={HeaderStyle.container}>
            <h3 className={HeaderStyle.title}>Wizarding Planet</h3>
            <button className={HeaderStyle.button}>SIGN-IN</button>
        </div>
    );  
}

export default Header;