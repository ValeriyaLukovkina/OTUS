import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cityListSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    coord: {
        lon: {
            type: Number,
            required: true,
        },
        lat: {
            type: Number,
            required: true,
        }
    },
}, { collection: 'CityList' });

export const CityList = mongoose.model('CityList', cityListSchema)
    .find({}, { _id: 0 })
    .sort({ name: 1 })