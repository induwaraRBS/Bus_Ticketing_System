import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import imageone from '../../Images/Slider1.jpg';
import imagetwo from '../../Images/Slider2.jpg';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }
  const slideImages = [
    {
      url: `${imageone}`,
    },
    {
      url: `${imagetwo}`,
    
    },
    {
      url: 'https://island.lk/wp-content/uploads/2022/12/sltb.jpg',
   
    },
  ];


const Image_slider = () => {
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Image_slider
