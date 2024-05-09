import React from 'react'

const Facilities = () => {
    return (
        <>
            <div className='text-center p-4 space-y-6  lg:flex place-content-center items-center gap-6 '>
                <div className='lg:text-left space-y-4  w-auto'>

                    <h3 className='font-medium text-[1.2rem] w-auto text-primary sm:text-3xl'>Facilities</h3>
                    <h2 className='font-bold text-2xl w-auto'>Simple do’s for a
                        smooth ride!</h2>
                    <ul className='font-normal w-auto text-secondary text-sm  sm:text-base sm:font-normal'>
                        <li>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</li>
                    </ul>
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