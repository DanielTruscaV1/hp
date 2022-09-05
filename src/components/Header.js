import React from "react";
import HeaderStyle from "./HeaderStyle.module.css";

const Header = () => {
    return (
        <div>
            <h3 className={HeaderStyle.title}>Wizarding Planet</h3>
            <button className={HeaderStyle.button}>SIGN-IN</button>
        </div>
    );  
}

export default Header;