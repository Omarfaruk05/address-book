const mongoose = require('mongoose');
const validator = require('validator');

const addressSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please provide your name."],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Please provide your email address."],
            validator: [validator.isEmail, "Please provide a valid email address."],
            lowercase: true,

        },
        contactNumber: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value);
                },
                message: "Please provide a valid phone number.",
            },
        },
        country:{
            type: String,
            trim: true,
        },
        address:{
            type: String,
            required: [true, "Please provide your address."]
        },
        createdAt: {
            type: Date,
            default: Date.now(),

        },
    },
    {
        timestamps: true,
    },
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;