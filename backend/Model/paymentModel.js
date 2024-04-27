import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({

    paymentAmount: { type: Number, required: true, },
    payment_ID :{ type:String,des:"from rezarpay"},
    paymentDate: {
        type: Date,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['Cash', 'Credit Card', 'Debit Card', 'Other'], // Customize payment methods
        required: true,
    },
    paymentReference: {
        type: String, // Transaction ID, Receipt number etc.
    },
})

const Payment = mongoose.model("Payment",paymentSchema)

export default Payment;