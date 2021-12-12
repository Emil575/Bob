const { model, Schema } = require("mongoose");

module.exports = model(
  "channel",
  new Schema({
    Channel: String,
    Guild: String
  })
);