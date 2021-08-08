const mongoose = require("mongoose");

//list of ideas to use ALL projects
const IdeaSchema = new mongoose.Schema({

    //relation to user
    userId: {
        type: String,
        required: [true, "userId is required"]
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    location: {
        type: String,
        required: [false]
    },

    time: {
        type: String,
        required: [false]
    },

    //array of ids(strings)
    //characters involved in scene/idea
    characters: {
        type: Array,
        required: [false]
    },

    //boolean of if idea was scrapped or not
    scrapped: {
        type: Boolean,
        required: [false]
    },

    //Array of strings
    //folder names from top to bottom directory
    folder: {
        type: Array,
        required: [false]
    }





}, { timestamps: true });



IdeaSchema.pre('validate', function (next) {

    next();
});

