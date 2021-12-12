const {
    Schema,
    model
} = require('mongoose')
const Schema1 = new Schema({
    Guild: String,
})
module.exports = model('Anti-bot', Schema1)