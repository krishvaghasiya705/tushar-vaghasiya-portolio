import React, { useEffect, useRef } from "react";
import "./slidersection.scss";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
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

gsap.registerPlugin(Draggable);

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
];

export default function Slidesection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;

    const handleScroll = (event) => {
      const delta = event.deltaY;
      gsap.to(slider, {
        x: `-=${delta}`,
        duration: 0.5,
        ease: "power2.out",
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });
    };

    window.addEventListener("wheel", handleScroll);

    Draggable.create(slider, {
      type: "x",
      edgeResistance: 0.65,
      inertia: true,
      bounds: slider.parentNode,
      onDragEnd: function() {
        gsap.set(slider, {
          x: this.x % totalWidth,
        });
      }
    });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="slider-section-main">
      <div className="slider-grid-main" ref={sliderRef}>
        {images.map((image, index) => (
          <div className="slider-image-div" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
