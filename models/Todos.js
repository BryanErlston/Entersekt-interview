var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    name: String
});

var Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;