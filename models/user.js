const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {type: String,required: true},
    lastName : {type: String,required: true},
    email : {type: String,required: true},
    phone : {type: String,required: true},
    maxPrice: String,
    preferences:{
        priceRange: {
            from : Number,
            to: {type: Number,required: true},
            
        }
    },
    bedrooms: Number,
    bathrooms: Number,
    propertyType: String,
    creationDate:{
        type: Date,default: Date.now
    },
    updateData:{
        type: Date, default: Date.now
    },
    favouriteProperties: [{
        propertyId: {type: String},
        propertyAddress: {type: String},
        listPrice: {type: Number},
        bedrooms: Number,
        bathrooms: Number,
        property: String
    }],
    registrationDate:{type:Date,default: Date.now},
    lastlogin:{type:Date,default:Date.now}
});

const User = mongoose.model("User", userSchema);

module.exports = User;