import React from 'react'
import "/src/index.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PhotoGallery = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <>
            <div className='text-center space-y-4 sm:space-y-6 mt-6'> 

                <h3 className='text-primary font-medium text-[1.2rem] sm:text-2xl'>Photo Gallery of</h3>
                <h2 className='font-bold text-2xl sm:text-4xl'>Toofani water parks &
                    Resturant</h2>
                <div className='flex justify-center gap-4 flex-col'>
                    <div className='space-x-2'>

                        <button className='text-black text-xs   px-4 py-2 marker: hover:bg-orange border-orange border-2   rounded'>All</button>

                        <button className='text-black text-xs   px-4 py-2 marker: hover:bg-orange border-orange border-2   rounded'>Water Slides</button>

                        <button className='text-black text-xs   px-4 py-2 marker: hover:bg-orange border-orange border-2   rounded'>Resturant</button>
                    </div>
                    {/* <div className='grid'>
                    <img src="/src/images/PhotoGallery/1.svg" alt="1" />
                    <img src="/src/images/PhotoGallery/2.svg" alt="2" />
                    <img src="/src/images/PhotoGallery/3.svg" alt="3" />
                    <img src="/src/images/PhotoGallery/4.svg" alt="4" />
                    <img src="/src/images/PhotoGallery/5.svg" alt="5" />
                </div> */}

                    <Carousel
                        showDots={true}
                        responsive={responsive}
                        className="carousel-container"
                        // keyBoardControl={"true"}
                        centerMode={true}
                    >
                        <img className='max-w-[135px] max-h-[108px]' src="/src/images/PhotoGallery/1.svg" alt="1" />

                        <img className='max-w-[135px] max-h-[108px]' src="/src/images/PhotoGallery/2.svg" alt="2" />
                        <img className='max-w-[135px] max-h-[108px]' src="/src/images/PhotoGallery/3.svg" alt="3" />

                        <img className='max-w-[135px] max-h-[108px]' src="/src/images/PhotoGallery/4.svg" alt="4" />
                        <img className='max-w-[135px] max-h-[108px]' src="/src/images/PhotoGallery/5.svg" alt="5" />
                    </Carousel>;
                </div>
            </div>
        </>
    )
}

export default PhotoGallery