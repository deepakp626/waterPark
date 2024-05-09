import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[url("/images/heroImage.png")]  bg-no-repeat min-w-full  h-[323px] bg-cover
            border-2   text-white opacity-2 p-4 relative
            sm:min-h-[800px] space-y-4'>

                <p className='mt-20 sm:text-2xl'>TOOFANI - The Largest Water Park in Bihar </p>
                <h3 className='font-bold text-[25px] sm:text-3xl'>Step into a bihar of
                    magic, where joy
                    springs to life!</h3>
                <button className='bg-[#2C8ECE] p-2  rounded-xl'>Book Ticket</button>

                {/* open timing  */}
                <div className='bg-[#2C8ECE] text-white p-4 gap-2 absolute right-5 -bottom-6 rounded-lg' >
                    <p>opening Timing</p>
                    <h3>09:00 AM - 17:00 PM</h3>
                </div>
            </div>
        </>
    )
}

export default HeroSection