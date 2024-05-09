import React from 'react'

const YourTicket = () => {
    const ticket = [
        {
            imgPath: "/images/TicketImage/1.png",
            name: "Regular Ticket.",
            desc: "Ticket for age 13+ start from RS.799/-",
            bookURL: "",
        },
        {
            imgPath: "/images/TicketImage/2.png",
            name: "Student Ticket.",
            desc: "Get 10% Discount just give your student card",
            bookURL: "",
        },
        {
            imgPath: "/images/TicketImage/3.png",
            name: "Group Ticket",
            desc: "Group Ticket for all access Rs.100/- pax",
            bookURL: "",
        },
        {
            imgPath: "/images/TicketImage/4.png",
            name: "Stag Ticket",
            desc: "Group Ticket for all access Rs.100/- pax",
            bookURL: "",
        },
    ]
    return (
        <>
            <div className='m-2 text-center mt-10'>

                <h4 className='text-primary font-medium text-xl sm:text-3xl'>Choose Your Ticket</h4>
                <p className='text-secondary sm:text-[1.2rem] space-y-2'>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the</p>
            </div>
            <div className='flex flex-wrap gap-4 m-4 justify-center'>
                {
                    ticket.map((item, index) => (
                        <div key={index} className='max-w-[166px]'>
                            <div>
                                <img className='max-w-[166px] max-h-[144px]' src={item.imgPath} alt="1 img" />
                            </div>
                            <div className='p-4 space-y-2 bg-gradient-to-r from-[#DEF1FD] to-[#C4DDF3]'>
                                <h3 className='text-primary font-semibold text-[0.9rem]' >{item.name}</h3>
                                <p className='text-secondary teset-[6px]'>{item.desc}</p>
                                <button  className='px-4 py-2  rounded text-white bg-gradient-to-r from-[#2C8ECE] to-[#09A4E4]'>BUY TICKET</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default YourTicket