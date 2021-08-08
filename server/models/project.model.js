const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    //title, type (novel, screenplay, script, etc), genre (fic or non), and description of project
    title: {
        type: String,
        required: [true, "Project name is required"]
    },
    type: {
        type: String,
        required: [true, "Project type is required"]
    },
    description: {
        type: String,
        required: [true, "Project description is required"]
    },
    genre: {
        type: String,
        required: [false]
    },
    //relation to user
    userId: {
        type: String,
        required: [true, "userId is required"]
    },


    //array of ids(strings)
    //chapters
    chapters: {
        type: Array,
        required: [true, "At least one Chapter is required"]
    },

    //array of ids(strings)
    //character Id's to allow shared characters between projects (i.e. use same harry potter obj in all 7 books)
    characters: {
        type: Array,
        required: [false]
    },

    //array of objects
    //timeline/plot grid
    plotGrids: {
        type: Array,
        required: [false]
    },

    //array of objects
    //notes about THIS project
    notes: {
        type: Array,
        required: [false]
    }

}, { timestamps: true });




ProjectSchema.pre('validate', function (next) {

    next();
});

