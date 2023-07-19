//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const item = mongoose.Schema({
    'Brand': {
        type: String,
        required: true
    },
    'Product Name': {
        type: String,
        required: true
    },
    'NIE Type': {
        type: String,
        required: true
    }
});

export default mongoose.model('Items', item);  // 'Items' is collections (schemaless). 'item' is schema