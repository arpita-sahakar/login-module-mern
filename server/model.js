import Mongoose  from "mongoose";

const userSchema = Mongoose.Schema({
    userName: { type: String, required: true},
    passWord: { type: String, required: true },
    name: { type: String, required: true},
    email : {type : String, required : true, match :/.+\@.+\..+/, unique : true},
    userId : { type: String, required: true, index: { unique: true } },
});

const User = Mongoose.model("user", userSchema);

export default User;