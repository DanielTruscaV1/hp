import React from "react";
import NavigationStyle from "./NavigationStyle.module.css";

const Navigation = () => {
    return (
        <div>
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