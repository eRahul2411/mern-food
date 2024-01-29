import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"First name must contain atleast 3 characters"],
        maxLength: [30,"First name cannot exceed  30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [1,"Last name must contain atleast 1 characters"],
        maxLength: [30,"Last name cannot exceed  30 characters"],
    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail,"Provide a valid Email"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10,"Phone Number must contain atleast 10 characters"],
        maxLength: [11,"Phone Number cannot exceed  11 characters"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },

})
export const Reservation = mongoose.model("REservation",reservationSchema);