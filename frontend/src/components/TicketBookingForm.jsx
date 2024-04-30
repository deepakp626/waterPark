import React from 'react'
import axios from 'axios';

const TicketBookingForm = () => {
    const initPay = ()=>{
        const options = {
            key : "************************",
            amount: data.amount,
            currency: data.currency,
            name: shoe.name,
            description: "Test",
            image:shoe.img,
            order_id: data.id,
            handler: async (response) => {
              try {
                const verifyURL = "https://localhost:8080/api/payment/verify";
                const {data} = await axios.post(verifyURL,response);
              } catch(error) {
                console.log(error);
              }
            },
            theme: {
              color: "#3399cc",
            },
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
    }

    // handal payment
    const paymentHandler = async (data)=>{
        try {
            const orderURL = "http://localhost:3000/api/order";
            const {data} = await axios.post(orderURL,{amount: data.price});
            console.log(data);
            // initPay(data.data);
          } catch (error) {
            console.log(error);
          }
    }

    // Creating account
    const account = async (e)=>{
        e.preventDefault()
        const data = {}
        data.name = e.target.name.value
        data.email = e.target.email.value
        data.arivalDate  = e.target.date.value
        data.adults  = e.target.adult.value
        data.children  = e.target.children.value
        data.price  = e.target.price.value
        try {
            await axios.post("http://localhost:3000/api/register",data)
            paymentHandler(data)
        } catch (error) {
            console.log("form error",error);
        }

    }
    return (
        <>
            <form onSubmit={account} className=' p-4 space-y-2'>
                <div className="card">
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' />
                </div>
                <div className="card">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder='Enter your Email' />

                </div>
                <div className="card">
                    <label htmlFor='date'>ARIVAL DATE</label>
                    <input type="date" name='date' min={"2024-04-22"}/>
                </div>

                <div className="card">
                    <label htmlFor="adult">ADULTS</label>
                    <select name="adult" id="cars" placeholder="select no">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                </div>
                <div className="card">
                    <label htmlFor="children">Children</label>
                    <select name="children" id="cars" placeholder="select no">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                </div>
                <div className="card">
                    <label htmlFor='price'>Price</label>
                    <input type="number" name='price' value={500} readOnly />
                </div>
                <button  className='block mx-auto px-4 py-2  rounded text-white bg-gradient-to-r from-[#2C8ECE] to-[#09A4E4]'
                type='submit'>Book Ticket</button>

            </form>
        </>
    )
}

export default TicketBookingForm