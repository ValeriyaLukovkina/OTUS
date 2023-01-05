import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;

const TitleSchema = new Schema({
    titleRSS: {
        type: String,
        required: true 
    },
    linkRSS: {
        type: String,
        required: true,
        unique:true
    }
}, {collection: 'TitleRSS'});

export const TitleRSS = mongoose.model('TitleRSS', TitleSchema)