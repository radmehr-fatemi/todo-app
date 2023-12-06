import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import User from "@/model/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

const handler = async ( req ,res ) => {
    const  { method ,body } = req;

    try {
        await connectDB()
    } catch (err) {
        console.log( "Error to connected to DB" ,err )
        res.status(500).json({
            status:"failed",
            massage:"Error in server"
        })
    }

    const session = await getServerSession( req ,res ,authOptions );
    if ( !session ) return res.status(404).json({
        status:"failed",
        massage:"You have note been login yet"
    });

    const user = await User.findOne({ email: session.user.email })
    if ( !user ) return res.status(404).json({
        status:"failed",
        massage:"User has not existed yet"
    });

    
    if ( method === "POST" ) {
        const { name ,lastName ,password } = body;        

        if ( name.length < 3 || lastName.length < 3 || password.length < 6 ) {
            return res.status(422).json({
                status:"failed",
                massage:"Invalid data"
            })
        }

        const isValid = await verifyPassword( password ,user.password );
        if ( !isValid ) return res.status(422).json({
            status:"failed",
            massage:"password correct"
        })

        user.name = name
        user.lastName = lastName
        user.save()

        res.status(201).json({
            status:"success",
            massage:"Data created",
            data:{ name:user.name ,lastName:user.lastName }
        })

    } else if ( method === "GET" ) {
        const profileData = {
            name: user.name,
            lastName: user.lastName,
            email:session.user.email
        }
        res.status(200).json({
            status:"success",
            data:profileData
        })
    }
}

export default handler