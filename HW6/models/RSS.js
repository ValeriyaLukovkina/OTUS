import { ObjectId } from "mongodb";
import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;

const RSSSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique:true
    },
    owner: {
        type: Types.ObjectId,
        ref: 'TitleRSS',
        required: true

    }
}, { collection: 'RSS' });

export const RSS = mongoose.model('RSS', RSSSchema)