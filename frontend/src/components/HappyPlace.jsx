import React from 'react'

const HappyPlace = () => {
    return (
        <>
            <section className='mt-8'>
                <div className='flex items-end gap-4 justify-center'> 
                    <img className='h-[119px] w-[117px]' src='src/images/happyPlace/place-1.png' />
                    <img  className='h-[230] w-[205px]'  src="src/images/happyPlace/place-2.png" alt="" />
                </div>
                <div className='text-center grid gap-4 m-4'>
                    <h4 className='text-primary ' >A day well spent!</h4>
                    <h3 className='font-bold text-2xl'>The happiest place in
                        God’s Own Country!</h3>
                    <p className='text-secondary text-[1rem]'>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.</p>
                    <button className='rounded text-white bg-gradient-to-r from-[#FC4D00] to-[#FE9000] px-4 py-2 m-auto'>Book Ticket</button>
                </div>
            </section>
        </>
    )
}

export default HappyPlace