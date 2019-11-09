var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    name: String,
    checked: Boolean
});

var Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;