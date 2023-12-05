import User from "@/model/User"
import connectDB from "@/utils/connectDB"
import { getSession } from "next-auth/react"
import { authOptions } from "./auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import sortTodos from "@/utils/sortTodos"

const handler = async ( req ,res ) => {
    
    try {
        await connectDB()
    } catch (err) {
        console.log( "Error to connected to DB" ,err )
        res.status(500).json({
            status:"failed",
            massage:"Error in server"
        })
    }

    const session = await getServerSession(req ,res ,authOptions );
    if ( !session ) return res.status(404).json({
        status:"failed",
        massage:"You have note been login yet"
    });

    const user = await User.findOne({ email: session.user.email });
    if ( !user ) return res.status(404).json({
        status:"failed",
        massage:"User has not existed yet"
    });

    const { method ,body } = req;
    const { title ,status } = body;

    if ( method === "POST" ) {
        user.todos.push({ title ,status });
        user.save()
        return res.status(201).json({
            status:"success",
            massage:"Todo created",
            data:user.todos
        })

    } else if ( method === "GET" ) {
        const todos = user.todos;
        const sortedTodos = sortTodos(todos);

        res.status(200).json({
            status:"success",
            data:sortedTodos
        })
    }
    

}

export default handler