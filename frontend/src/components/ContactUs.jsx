import "/src/index.css"

const ContactUs = () => {
    
    return (
        <>
            <section className=' space-y-8 md:grid grid-cols-2'>

                <form className=' space-y-8 my-12'>
                    <h2 className='text-center text-primary text-[1.2rem]'>Contact Us</h2>
                    <div className='divtag'>
                        <label className='labeltag' htmlFor="name"> <span className='spantag'>.01</span> Whats your Name?</label>
                        <input className='inputField' type="text" name='name'
                            placeholder='Type your full Name' />
                    </div>
                    <div className='divtag'>
                        <label className='labeltag' htmlFor="name"> <span className='spantag'>.02</span> Whats your Email Address?</label>
                        <input className='inputField' type="text" name='name'
                            placeholder='example@email.com' />
                    </div>
                    <div className='divtag'>
                        <label className='labeltag' htmlFor="name"> <span className='spantag'>.03</span> Whats your Phone Number?</label>
                        <input className='inputField' type="text" name='name'
                            placeholder='+91' />
                    </div>
                    <div className='divtag'>
                        <label className='labeltag' htmlFor="name"> <span className='spantag'>.04</span> What's Your Message</label>
                        <input className='inputField' type="text" name='name'
                            placeholder='Enter your message' />
                    </div>
                    <button className="mx-auto block rounded px-8 py-2 text-base font-medium text-white bg-gradient-to-r from-[#FC4D00] to-[#FE9000] ">Submit</button>
                </form>


                <section className="m-12 sm:m-8">
                    <div className="grid grid-cols-2 md:grid-cols-1  gap-y-6 justify-center">
                        <div>
                            <h3 className="font-medium text-xs sm:text-lg">Call Us</h3>
                            <p className="font-normal text-[9px] sm:text-base">Mon-Fri from 8am to 17pm <br />
                                01494 471430</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-xs sm:text-lg">Chat to us</h3>
                            <p className="font-normal text-[9px] sm:text-base">We are here To Help. <br />
                                demes9@gamil.com</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-xs sm:text-lg">Visit Us</h3>
                            <p className="font-normal text-[9px] sm:text-base"> Come  Say  Hi</p>
                            <p className="font-normal text-[9px] sm:text-base"> Lincoln Park Business Centre
                                Cressex Business Park, HP12 3RD</p>
                        </div>
                    </div>

                    <div className="my-4 self-start">
                        <iframe className="max-w-[28rem] h-56  sm:min-w-[25rem] md:min-w-[28rem]"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3578.197437658583!2d85.1911359!3d26.2552548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed21001691201d%3A0x2ce42a627b2d51f3!2sTOOFANI%20WATER%20PARK%20(MOTIPUR%20MUZAFFARPUR%20)!5e0!3m2!1sen!2sin!4v1715276899951!5m2!1sen!2sin" 
                        style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>


            </section>
        </>
    )
}

export default ContactUs