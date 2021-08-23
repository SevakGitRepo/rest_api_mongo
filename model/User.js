import mongoose from "mongoose"

const User = new mongoose.Schema({
    first_name : {type: String, required: true, minlength:3, maxlength: 50},
    last_name : {type: String, required: true, minlength:3, maxlength: 50},
    age : {type: Number, required: true, min: 18, max:80}
})

export default mongoose.model("User", User);