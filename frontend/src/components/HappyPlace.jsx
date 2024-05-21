import React from 'react'

const HappyPlace = () => {
    return (
        <>
            <section className='mt-8 sm:flex flex-row-reverse justify-between md:justify-around items-center mx-14'>
                <div className='flex items-end gap-4 justify-center'>
                    <img className='h-[119px] w-[117px]' src='/images/happyPlace/place-1.png' />
                    <img className='h-[230] w-[205px]' src="/images/happyPlace/place-2.png" alt="" />
                </div>
                <div className='text-center grid gap-4 m-4 max-w-64 sm:text-left'>
                    <h4 className='text-primary ' >A day well spent!</h4>
                    <h3 className='font-bold text-2xl'>The happiest place in
                        God’s Own Country!</h3>
                    <p className='text-secondary text-[0.8rem] sm:text-[0.6rem] font-normal '>The first thing to know about Toofani Water Park is that it's the best place to go for exhilarating water activities and revitalizing family fun. Our water park, which is tucked away in beautiful surroundings, provides guests of all ages with the ideal mix of exhilarating rides and soothing attractions. Toofani Water Park, which prioritizes cleanliness, safety, and visitor happiness, offers a memorable day full of fun, games, and treasured memories.</p>
                    <a href="#bookticket">
                        <button className='rounded text-white bg-gradient-to-r from-[#FC4D00] to-[#FE9000] px-4 py-2 m-auto'>Book Ticket</button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default HappyPlace