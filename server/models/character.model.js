const mongoose = require("mongoose");

//list of ideas to use ALL projects
const CharacterSchema = new mongoose.Schema({

    //relation to user
    userId: {
        type: String,
        required: [true, "userId is required"]
    },

    //object with properties .firstName:"", .lastName:"", .nicknames:[]
    names: {
        type: Object,
        required: [true, "Name information is required"]
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    age: {
        type: Number,
        required: [false]
    },


    //array of other traits User may add (ethnictiy, optimistic/pess, humbleness, education, etc)
    otherTraits: {
        type: Array,
        required: [false]
    },

    //Array of strings
    //folder names from top to bottom directory
    folder: {
        type: Array,
        required: [false]
    },

    //boolean of if character was scrapped or not
    scrapped: {
        type: Boolean,
        required: [false]
    }

}, { timestamps: true });



CharacterSchema.pre('validate', function (next) {

    next();
});

