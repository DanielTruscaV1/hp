import React from 'react';
import ContentStyle from "./ContentStyle.module.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.webp";
import image3 from "../images/image33.jpg";

const Content = () => {
  return (
    <div className={ContentStyle.container}>
        <h1 className={ContentStyle.title}>
            Harry Potter
        </h1>
        <img src={image1} alt="image1" className={ContentStyle.image1}/>
        <p className={ContentStyle.description1}>
          Watch Tom Felton take a trip down memory lane at Warner Bros. Studio Tour London
        </p>
        <img src={image2} alt="image2" className={ContentStyle.image2}/>
        <p className={ContentStyle.description2}>
          Catch up on all the announcements from our Back to Hogwarts 2022 – A Look Ahead showcase
        </p>
        <img src={image3} alt="image3" className={ContentStyle.image3}/>
        <p className={ContentStyle.description3}>
          Ranked: The most and least spectacular arrivals at Hogwarts
        </p>
    </div>
  )
}

export default Content;