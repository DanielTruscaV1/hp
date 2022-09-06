import React from 'react';
import ContentStyle from "./ContentStyle.module.css";

const Content = () => {
  return (
    <div className={ContentStyle.container}>
        <h1 className={ContentStyle.title}>
            Harry Potter
        </h1>
    </div>
  )
}

export default Content;