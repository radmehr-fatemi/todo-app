import mongoose from "mongoose"

const connectDB = async () => {
    try {
        if ( mongoose.connections[0].readyState ) return
        mongoose.set( "strictQuery" ,false );
        await  mongoose.connect(process.env.MONOGO_URI)
        console.log("Connected to DB")
    }catch (err) {
        console.log("Error DB connection" ,err)
    }
}

export default connectDB