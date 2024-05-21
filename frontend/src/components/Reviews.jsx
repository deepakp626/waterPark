import ReactStars from "react-rating-stars-component";
import { ImQuotesLeft } from "react-icons/im";
import { useState } from "react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Reviews = () => {
    const [reviews, setReview] = useState([])
    const firstExample = {
        size: 15,
        value: 2.5,
        edit: false
    };

    const getReviews = async () => {
        // 'https://maps.googleapis.com/maps/api/place/details/json?placeid=<your_place_id>&sensor=true&key=<key>';
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=<span class="math-inline">\{placeId\}&key\=</span>{apiKey}`;
        const response = await axios.get(url);
        setReview(response.data.result.reviews)
        console.log(response);
        return response.data.result.reviews;
    }
    // getReviews()
    return (
        <>
            <section className='mt-4 text-center m-4 sm:mt-6 space-y-4'>
                <h2 className='text-primary  font-medium text-xl'>What People Says</h2>
                <h1 className='font-bold text-2xl'>Happy Explore Reviews</h1>
            </section>


            <section className='flex justify-center m-4 mb-4 sm:mb-6'>
                {/* <Carousel showThumbs={"false"} showArrows="false" emulateTouch="false" showStatus="false" stopOnHover="false">
                    <div className="relative  max-h-[240px]   w-auto flex gap-3 items-start px-2.5 pt-2 pb-6 rounded-sm bg-neutral-50 text-slate-900">
                        <img
                            className="shrink-0 w-24 aspect-[0.91] "
                            loading="lazy"
                            src='/images/reviews/Image.png'
                        />
                        <p className="flex flex-col">
                            some
                        </p>
                    </div>
                    <div className="relative  max-h-[240px]   w-auto flex gap-3 items-start px-2.5 pt-2 pb-6 rounded-sm bg-neutral-50 text-slate-900">
                        <img
                            className="shrink-0 w-24 aspect-[0.91] "
                            loading="lazy"
                            src='/images/reviews/Image.png'
                        />
                        <p className="flex flex-col">
                            some
                        </p>
                    </div>
                  

               
                  
                </Carousel> */}
                <div className="relative  max-h-[140px]   max-w-[270px] flex gap-3 items-start px-2.5 pt-2 pb-6 rounded-sm bg-neutral-50 text-slate-900">
                    <img
                        className="shrink-0 w-24 aspect-[0.91] "
                        loading="lazy"
                        src='/images/reviews/Image.png'
                    />
                    <div className="flex flex-col">
                        <ImQuotesLeft loading="lazy" className="absolute self-end w-3 aspect-[1.33] text-orange" />
                        <div className="text-xs font-semibold uppercase">Suraj Kumar</div>
                        <ReactStars {...firstExample} />
                        <div className="mt-1.5 text-[6px] tracking-normal leading-3">
                            Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum
                            id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad
                            magnam blanditiis excepturi expedita aut. Aut repellat inventore qui
                            minima illum est.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews