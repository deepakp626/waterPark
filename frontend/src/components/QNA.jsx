import React from 'react'

const QNA = () => {
    const qna = [
        {
            ques: "What are the operating hours of the water park?",
            ans: "Water park operating hours typically vary by season and day of the week. Currently, we operate from 9 a.m. to 5 p.m.",
            src: "/images/QNAPersonImag/1.png"
        },
        {
            ques: "Is there an age or height requirement for certain rides?",
            ans: "Yes, some rides may have specific age, height, or weight requirements for safety reasons. These requirements are usually posted near each ride or attraction, and guests should adhere to them to ensure a safe experience.",
            src: "/images/QNAPersonImag/1.png"
        },
        {
            ques: "Can we bring outside food or drinks into the water park?",
            ans: "We do not allow outside food inside the Water Park premises to avoid the contamination of Water but we have curated a finger-licious menu just for our foodies that would suffice the hunger after hours of fun and keep you energised for the day!",
            src: "/images/QNAPersonImag/1.png"
        },
        {
            ques: "Is there a designated area for young children?",
            ans: "Yes, we have designated area specifically designed for young children, featuring gentle water slides, and interactive play structures. These areas are typically supervised and provide a safe environment for young guests to enjoy.",
            src: "/images/QNAPersonImag/1.png"
        },
        {
            ques: "Are there changing rooms and locker facilities available?",
            ans: "Yes, Toofani Water park provides changing rooms, shower facilities, and locker rentals for guests' convenience. Visitors can use these facilities to store personal belongings securely and change into swimwear.",
            src: "/images/QNAPersonImag/1.png"
        },
        {
            ques: "Can I purchase tickets online in advance?",
            ans: "We offer the option to purchase tickets online in advance, which can save time and provide access to special promotions or discounts. Guests should check the park's website for online ticketing options and availability.",
            src: "/images/QNAPersonImag/1.png"
        },
    ]
    return (
        <>
            <h3 className='text-primary font-bold text-base text-center sm:text-xl mb-6'>Frequently Asked Questions</h3>
            <div className='flex place-content-center gap-4 p-4 flex-wrap min-w-full  min-h-[285px]  bg-[url("/images/QNAbg/1.png")] bg-no-repeat bg-cover'>

                {
                    qna.map((item, index) => (
                            <div key={index} className='relative space-y-6 bg-white p-4 gap-4  border-2 max-w-60 '>
                                <div className='space-y-4'>
                                    <h3 className='font-semibold text-sm space-y-2'>{item.ques}
                                    </h3>
                                    <p className='font-medium text-xs text-secondary'>{item.ans}</p>
                                </div>
                                <div className='fle'>
                                    <a className='self-end' href="link">click here</a>
                                    <img className='absolute right-10 bottom-0' src={item.src} alt="image" />
                                </div>
                            </div>
                    ))
                }





            </div>
        </>
    )
}

export default QNA



