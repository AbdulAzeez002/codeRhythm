const mongoose = require("mongoose");

const formSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
},
{ timestamps: true }
)

const Contact = mongoose.model("Contact", formSchema);

module.exports = Contact;