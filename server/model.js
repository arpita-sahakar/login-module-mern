import Mongoose  from "mongoose";

const userSchema = Mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    passWord: { type: String, required: true },
    email : {type : String, required : true, match :/.+\@.+\..+/, unique : true},
    // name: { type: String, required: true},
    // userId : { type: String, required: true, index: { unique: true } },
});

const User = Mongoose.model("user", userSchema);

export default User;