const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/realstateapp");

const propertySeed = [
    {
        listingID: 178954,
        listingAgent: "John Dcruz",
        listingComapany: "Gerson Realty Co",
        daysListed: 5,
        listStatus: "For Sale",
        address: "5326 N. Julian Rd",
        city: "Chandler",
        state: "AZ",
        zipcode: "852051",
        propType: "Single Family Home",
        yearBuilt: 1965,
        listPrice: 225000,
        propSqFeet: 1424,
        lotSqFeet: 7318,
        bedroom: 2,
        bathroom: 2,
        subDivision: "VELDA ROSE ESTATES 3",
        annualPropTax: 842,
        taxCountry: "Maricopa",
        utilityCompany: "sewer: septic, water: City Water,Utilities: SRP",
        schoolInfo: "Mesa Unified School District",
        hoaInfo: "yes",
        hoaFee: 182,
        propFeatures: "Appliances: laundary facilities: washer/drye hookup only, heating and etc.",
        image: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87",
    listingLink: String,
    propDetailSummary: String,
    createdDate: {type: Date,default: Date.now},
    updatedDate: {type: Date,default: Date.now},
    likedByUser: [{
        type: String,
        userFullName: String,
    }]

    }
]