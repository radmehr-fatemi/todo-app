import { compare, hash } from "bcryptjs"

const hashPassword = password => {
    const hashedPassword = hash(password, 12)
    return hashedPassword
}

const verifyPassword = async ( password ,hashedPassword ) => {
    const isValid = await compare( password ,hashedPassword )
    return isValid
}

export { hashPassword ,verifyPassword }