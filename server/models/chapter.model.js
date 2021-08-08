const mongoose = require("mongoose");

//list of ideas to use ALL projects
const ChapterSchema = new mongoose.Schema({
    //relation to project
    projectId: {
        type: String,
        required: [true, "must be connected to a project"]
    },

    name: {
        type: String,
        required: [true, "Name information is required"]
    },

    //object with property .paragraphs (array) may expand upon in the future
    content: {
        type: Object,
        required: [false]
    },

    //array of character id's
    characters: {
        type: Array,
        required: [false]
    }

}, { timestamps: true });



ChapterSchema.pre('validate', function (next) {
    next();
});

