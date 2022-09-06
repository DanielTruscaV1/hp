import React from "react";
import NavigationStyle from "./NavigationStyle.module.css";

const Navigation = () => {
    const handleMouseOver = () => {
        document.getElementById("headerContainer").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("navigationContainer").style.backgroundColor = "rgb(10, 10, 10)";
    }
    const handleMouseOut = () => {
        document.getElementById("navigationContainer").style.backgroundColor = "transparent";
        document.getElementById("headerContainer").style.backgroundColor = "transparent";
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} id="navigationContainer" className={NavigationStyle.container}>
            <ul className={NavigationStyle.list}>
                <li>NEWS &#38; FEATURES</li>
                <li>QUIZZES</li>
                <li>PUZZLES</li>
                <li>DISCOVER</li>
                <li>HOGWARTS SORTING</li>
                <li>SHOP</li>
            </ul>
        </div>
    );
}

export default Navigation;