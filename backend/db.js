const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://raykarsagar2005:kZNRCCMsOw1onNzE@sagar.zxhf4.mongodb.net/Todo-App")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("Todo-App",todoSchema)

module.exports={
    todo: todo
}