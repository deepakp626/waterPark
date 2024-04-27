import mongoose from 'mongoose';

const connectDB = async (url)=>{
    const option ={
        dbName:"waterPart"
    }
    try {
        await mongoose.connect(url,option)
        console.log("Connection succesfull");
    } catch (error) {
        console.log("DB error",error);
    }
}


export default connectDB;
