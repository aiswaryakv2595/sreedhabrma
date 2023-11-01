import React from 'react';
import { styles } from '../styles';
import Carousel from './Carousel';
import { slides } from '../constants';

function Hero() {
  return (
    <section className='relative w-full mx-auto'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex justify-center items-center">
          <div className="w-full bg-black">
            <Carousel autoSlide={true}>
              {slides.map((s, index) => (
                <div key={index} className="relative" style={{ height: '500px' }}>
                  <img
                    src={s.image}
                    className="object-cover w-full h-full"
                    alt={`Slide ${index}`}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div className={`${styles.heroHeadText} text-white text-center`}>
                      <h1 className='content-style drop-shadow-lg'>{s.content}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
