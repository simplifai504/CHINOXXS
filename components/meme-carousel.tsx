"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const slides = new Array(4).fill(1);

export function MemeCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          slides.map((_e, index) => (
            <img key={index} src={`./meme-gen/slides/${index}.webp`} className="embla__slide"></img>
          ))
        }
      </div>
    </div>
  )
}
