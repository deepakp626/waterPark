import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[url("src/images/heroPhone.png")]  bg-no-repeat max-w-screen-md h-[323px] bg-cover
            border-2   text-white opacity-2 p-4 relative'>

                <p className='mt-20'>TOOFANI - The Largest Water Park in Bihar </p>
                <h3 className='font-bold text-[25px]'>Step into a bihar of
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