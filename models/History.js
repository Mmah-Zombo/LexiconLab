const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const Schema = moongoose.Schema;

// Creates the history table
const historySchema = new Schema({
    word : {
        type: String,
        required: true
    },
    data : {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }, 
})

// Creates the model to interact with the history table
const History = mongoose.model('History', historySchema);
module.exports = History;
