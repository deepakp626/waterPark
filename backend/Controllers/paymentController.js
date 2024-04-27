import crypto from 'crypto';
class paymentController {

    //Creating Order
    static order = async (req, res) => {
        try {

            const instance = new Razorpay({
                key_id: "",
                key_secret: ""
            })
            const options = {
                amount: req.body.amount * 100,
                currency: "INR",
            }
            const order = await instance.orders.create(options);
            res.status(200).json({ success: true, data: order });
        } catch (error) {
            console.log("Error payment", error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    //Verifying the payment
    static paymentVarification = async (req, res) => {
        try {
            const {
                razorpay_orderID,
                razorpay_paymentID,
                razorpay_signature } = req.body;
            const sign = razorpay_orderID + "|" + razorpay_paymentID;
            const resultSign = crypto
                .createHmac("sha256", process.env.KEY_SECRET)
                .update(sign.toString())
                .digest("hex");

            if (razorpay_signature == resultSign) {
                return res.status(200).json({ message: "Payment verified successfully" });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }
}

export default paymentController