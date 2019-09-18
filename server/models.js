const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authorsdb", { useNewUrlParser : true });

const AuthorSchema = new mongoose.Schema({
    name : { type : String, required : [true, "Please provide a name"], minlength : [2, "Your name must be longer than 2 characters"] }
},
{
    timestamps : true
})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;