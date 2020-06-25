import mongoose from "mongoose";

const CVSchema = mongoose.Schema({
    jobID: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    weight:{
        type:Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    class: {
        type: String,
        required: false
    },
    created_date:{
        type:Date,
        default: Date.now
    }
});

const rankingModel = mongoose.model('cvs', CVSchema);

module.exports = rankingModel;
