import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './Slider.css'
const Slider = () => {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://img.freepik.com/free-vector/winner-sticker-editable-cartoon-text-effect_36662-684.jpg?w=740&t=st=1685586877~exp=1685587477~hmac=b6b5fe1b24658b0a498f1e0fcfcb9310df3d2088974fc74393ca8d2a2f516052",
    },
    {
      url: "https://img.freepik.com/premium-vector/golden-cup-trophy-with-red-ribbon-winner-text-illustration-sports-high-award-with-falling-down-confetti_168425-45.jpg?w=740",
    },
  ];
  return (
    <div className='slider' >
      <SimpleImageSlider
        navMargin={"20%"}
        width={"75%"}
        height={250}
        images={sliderImages}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(imageNum);
        }}
        autoPlayDelay={3}
      />
      <div style={{ fontSize: "1.5rem" }}>
      </div>
    </div>
  )
}

export default Slider