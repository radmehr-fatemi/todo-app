import User from "@/model/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

const handler = async ( req ,res ) => {

    const { method ,body } = req;
    if ( method !== "POST" ) return

    try {
        await connectDB()
    } catch (err) {
        console.log( "Error to connected to DB" ,err )
        res.status(500).json({
            status:"failed",
            massage:"Error in server"
        })
    }

    const { email ,password } = body; 
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if ( !regex.test(email) || password.length < 6 ) {
        return res.status(422).json({
            status:"failed",
            massage:"Invalid data"
        })
    }

    const existingUser = await User.findOne({ email:email });
    if ( existingUser ) return res.status(422).json({
        status:"failed",
        massage:"user already existed"
    })

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email ,password:hashedPassword });
    res.status(201).json({
        status:"success",
        massage:"User created",
        data:newUser
    })
}

export default handler