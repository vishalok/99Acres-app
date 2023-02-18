const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    listingID: { type: String},
    listingAgent:{ type: String},
    listingCompany:{type: String},
    daysListed: { type: Number},
    listStatus: { type: String},
    address: {type: String},
    city: String,
    state: String,
    zipcode: Number,
    propType: String,
    yearBuilt: Number,
    listPrice: Number,
    propSqFeet: Number,
    lotSqFeet: Number,
    bedroom: Number,
    bathroom: Number,
    subDivision: String,
    photoGallery: {type:[]},
    property_id: String,
    description: String,
    email: String,
    annualPropTax: Number,
    taxCountry: String,
    utilityCompany: String,
    schoolInfo: String,
    hoaFee: String,
    propFeatures: String,
    image: String,
    listingLink: String,
    propDetailSummary: String,
    createdDate: {type: Date,default: Date.now},
    updatedDate: {type: Date,default: Date.now},
    likedByUser: [{
        type: String,
        userFullName: String,
    }]
});

const Property = mongoose.model("property",propertySchema);

module.exports = Property;