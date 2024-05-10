import React from 'react'

const Facilities = () => {
    const facilityList = [
        "Follow Safety Rules: Always abide by the safety rules and guidelines set by the water park. Pay attention to lifeguards' instructions and signage posted throughout the park.",
        "Wear Appropriate Attire: Wear proper swimwear and attire suitable for water activities. Avoid loose clothing or accessories that may pose a safety hazard on rides.",
        "Stay Hydrated: Drink plenty of water throughout the day to stay hydrated, especially when engaging in physical activities under the sun.",
        "Keep an Eye on Children: Supervise children closely at all times, especially around water attractions. Ensure they wear appropriate flotation devices if required.",
        "Follow Ride Instructions: Listen carefully to ride attendants' instructions before boarding water slides or attractions. Follow all safety protocols, including seating arrangements and weight limits.",
        "Use Locker Facilities: Utilize locker facilities to store valuables securely while enjoying water activities. Avoid bringing unnecessary items into the water park.",
        "Practice Good Hygiene: Shower before entering pools or attractions to maintain cleanliness and prevent the spread of germs. Follow proper restroom etiquette and dispose of trash in designated bins.",
        "Have Fun Responsibly: Enjoy the water park's attractions and activities responsibly. Respect other guests, follow park rules, and refrain from disruptive behavior that may endanger yourself or others.",
        "Apply Sunscreen: Protect your skin from sunburn by applying sunscreen with a high SPF rating. Reapply sunscreen regularly, especially after swimming.",
    ]
    return (
        <>
            <div className='text-center p-4 space-y-6   place-content-center items-center gap-6 '>
                <div className='lg:text-left space-y-4  w-auto'>

                    <h3 className='font-medium text-[1.2rem] w-auto text-primary sm:text-3xl'>Facilities</h3>
                    <h2 className='font-bold text-2xl w-auto'>Simple do’s for a
                        smooth ride!</h2>
                    <ol className='font-normal w-auto text-secondary text-sm space-y-2  sm:text-base sm:font-normal'>
                       
                            {
                                facilityList.map((item,index)=>(
                                    <>
                                    <li> <span className='text-black'>{index +1} -</span> { item}</li>
                                    </>
                                ))
                            }
                    </ol>
                </div>
                <div className='grid grid-cols-2 gap-6 justify-center'>
                    <div className='flex justify-center flex-col items-center gap-2 rounded shadow-xl px-4 py-4 min-w-[138px]'>
                        <div>
                            <img src="/images/facilitties/1.png" alt="1" />
                        </div>
                        <p className='font-medium text-[0.9rem]'>MEALS</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-2 rounded shadow-xl px-4 py-4 min-w-[138px]'>
                        <div>
                            <img className='blue' src="/images/facilitties/2.png" alt="2" />
                        </div>
                        <p className='font-medium text-[0.9rem]'>MEALS</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-2 rounded shadow-xl px-4 py-4 min-w-[138px]'>
                        <div>
                            <img src="/images/facilitties/3.png" alt="3" />
                        </div>
                        <p className='font-medium text-[0.9rem]'>MEALS</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-2 rounded shadow-xl px-4 py-4 min-w-[138px]'>
                        <div>
                            <img src="/images/facilitties/4.png" alt="4" />
                        </div>
                        <p className='font-medium text-[0.9rem]'>MEALS</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Facilities