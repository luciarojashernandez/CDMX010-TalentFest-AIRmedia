import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import valle from '../Assets/Images/banner_del_valle.png'
import xochimilco from '../Assets/Images/banner_xochimilco.png'
import malinche from '../Assets/Images/banner_malinche.png'

const items = [
  {
    src: valle, 
    altText: 'imgValle',
    // caption: 'DelValle',
  },
  {
    src: xochimilco,
    altText: 'imgXochimilco',
    // caption: 'Xochimilco',
  },
  {
    src: malinche,
    altText: 'imgMalinche',
    // caption: 'Malinche',
  }
];

const Slider= (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
            <img src={item.src} alt={item.altText} width='312px' height='82px'/>
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <div>
        <style>
          {/* {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
              }`
          } */}
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="<" onClickHandler={previous} />
          <CarouselControl direction="next" directionText=">" onClickHandler={next} />
        </Carousel>
      </div>
    );
  }
  
  export default Slider;