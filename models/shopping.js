const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingSchema = new Schema({
    first_item1: {
        type: String
    },
    last_item1: {
        type: String
    },
    
});
mongoose.model('Shopping', shoppingSchema);