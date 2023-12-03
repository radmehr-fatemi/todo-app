import mongoose from "mongoose"

const connectDB = async () => {
    if ( mongoose.connections[0].readyState ) return
    mongoose.set( "strictQuery" ,false );
    await  mongoose.connect(process.env.MONOGO_URI)
    console.log("Connected to DB")
}

export default connectDB