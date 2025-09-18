import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("Error to connect database", error)
    }
}

export default connectDB;