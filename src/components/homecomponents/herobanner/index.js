import React, { useState, useEffect } from "react";
import "./HomeHerobanner.scss";
import { TypeAnimation } from "react-type-animation";
import glowimage from "../../../assets/images/glowimage.gif";
import axios from "axios";

export default function HomeHerobanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [HomeHerosection, setHomeHerosection] = useState({
    description: "",
    imageURL: []
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % HomeHerosection.imageURL.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [HomeHerosection.imageURL]);

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
                    src={HomeHerosection.imageURL[currentImage]}
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
