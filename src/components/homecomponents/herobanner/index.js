import React, { useState, useEffect } from "react";
import "./HomeHerobanner.scss";
import { TypeAnimation } from "react-type-animation";
import glowimage from "../../../assets/images/glowimage.gif";
import Image1 from "../../../assets/images/img1.jpg";
import Image2 from "../../../assets/images/img2.jpg";
import Image3 from "../../../assets/images/img3.jpg";
import Image4 from "../../../assets/images/img4.jpg";
import Image5 from "../../../assets/images/img5.jpg";
import Image6 from "../../../assets/images/img6.jpg";
import Image7 from "../../../assets/images/img7.jpg";
import Image8 from "../../../assets/images/img8.jpg";
import Image9 from "../../../assets/images/img9.jpg";
import Image10 from "../../../assets/images/img10.jpg";
import Image11 from "../../../assets/images/img11.jpg";
import Image12 from "../../../assets/images/img12.jpg";
import Image13 from "../../../assets/images/img13.jpg";
import Image14 from "../../../assets/images/img14.jpg";
import Image15 from "../../../assets/images/img15.jpg";
import axios from "axios";

const images = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
  Image11, Image12, Image13, Image14, Image15
];

export default function HomeHerobanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [HomeHerosection, setHomeHerosection] = useState({
    description: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.backendless.com/5E7E29D7-8DD5-472B-B811-FC5FE51AD29A/13518365-9BC7-4851-96C7-1766089F4C8B/data/homeherobanner"
      )
      .then((response) => setHomeHerosection(response.data[0]))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home-herobanner-main">
      <video autoPlay muted loop className="home-herobanner-video">
        <source src="herobanner-video.mp4" type="video/mp4" />
        <source src="your-video-file.webm" type="video/webm" />
        <source src="your-video-file.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className="home-herobanner-alignment">
        <div className="container">
          <div className="home-herobanner-content-alignment">
            <div className="home-herobanner-left-content">
              <h1>
                {HomeHerosection.title && (
                  <TypeAnimation
                    sequence={[
                      HomeHerosection.title,
                      1000,
                      "",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                )}
              </h1>
              {/* <p className="business-pera">I am a business enthusiast man</p> */}
              <p>
                {HomeHerosection.description}
              </p>
            </div>
            <div className="home-herobanner-image-div-main">
              <div className="home-herobanner-image-div">
                <div className="glowimage-effect">
                  <img src={glowimage} alt="glowimage" />
                </div>
                <div className="image-effect">
                  <img
                    src={images[currentImage]}
                    alt={`Image${currentImage + 1}`}
                  />
                </div>
              </div>
              {/* <div className="filmtape-image">
                <img src={Filmstrip} alt="Filmstrip" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
