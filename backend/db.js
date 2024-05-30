const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://admin:Harliv_1003@cluster0.58gzul4.mongodb.net/")
const todosschema=  mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo =mongoose.model("todos",todosschema);
module.exports={
    todo
}