import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:() => Date.now(),
        immutable:true
    },

    name:String,
    lastName:String,
    
    todos:[{ title:String ,status:String }]
});

const User = models.User || new model("User" ,userSchema);
export default User;