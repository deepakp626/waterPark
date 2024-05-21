import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[url("/images/heroImage.png")]  bg-no-repeat min-w-full  h-[323px] bg-cover
            border-2   text-white opacity-2 p-4 relative
            sm:min-h-[800px] space-y-4'>

                <p className='mt-20 sm:text-2xl'>Bihar* </p>
                <h3 className='font-bold text-[25px] sm:text-3xl '>Toofani Water Park- The Largest Water Park in North Bihar</h3>
                <a href="#bookticket">
                    <button className=' text-white bg-[#2C8ECE] px-2 py-1 rounded-lg'>Book Ticket</button>
                </a>

                {/* open timing  */}
                <div className='bg-[#2C8ECE] text-white p-4 gap-2 absolute right-5 -bottom-6 rounded-lg' >
                    <p>opening Timing</p>
                    <h3>09:00 A.M. - 5:00 P.M.</h3>
                </div>
            </div>
        </>
    )
}

export default HeroSection