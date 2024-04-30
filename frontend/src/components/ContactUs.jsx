import "/src/index.css"

const ContactUs = () => {
    return (
        <>
            <section className=' space-y-8'>
                <h2 className='text-center text-primary text-[1.2rem]'>Contact Us</h2>

                <form className=' space-y-8 my-12'>
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


                <section className="m-12">
                    <div className="grid grid-cols-2  gap-y-6 justify-center">
                        <div>
                            <h3  className="font-medium text-xs">Call Us</h3>
                            <p  className="font-normal text-[9px]">Mon-Fri from 8am to 17pm <br />
                                +91 000-000-000</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-xs">Chat to us</h3>
                            <p className="font-normal text-[9px]">We are here To Help. <br />
                                demo@gamil.com</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-xs">Visit Us</h3>
                            <p  className="font-normal text-[9px]"> Come  Say  Hi</p>
                            <p className="font-normal text-[9px]"> Lincoln Park Business Centre
                                Cressex Business Park, HP12 3RD</p>
                        </div>
                    </div>

                    <div>
                        
                    </div>
                </section>


            </section>
        </>
    )
}

export default ContactUs