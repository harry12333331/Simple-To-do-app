const mongoose= require("mongoose");
mongoose.connect("")
const todosschema=  mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo =mongoose.model("todos",todosschema);
module.exports={
    todo
}
