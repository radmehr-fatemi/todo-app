import User from "@/model/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {

                try {
                    await connectDB()
                } catch (err) {
                    console.log("Error to connected to DB", err)
                    throw new Error("Error in server")
                }

                const { email, password } = credentials;
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (!regex.test(email) || password.length < 6) {
                    throw new Error("Invalid data")
                }

                const existingUser = await User.findOne({ email: email });
                if (!existingUser) throw new Error("User has not existed yet");

                const isValid = await verifyPassword(password, existingUser.password);
                if (!isValid) throw new Error("Invalid email or password");

                return { email }
            }
        })
    ]
}

export default NextAuth(authOptions)