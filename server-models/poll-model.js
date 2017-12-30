//Template/structure/model of document for poll
//Require mongoose
const mongoose = require("mongoose");
//Create instance of a mongoose schema
const Schema = mongoose.Schema;

const pollSchema = new Schema(
  {
    question: String,
    options: [
      {name: String, userVotes: [String]}
],
    createdBy: String
  },
  { timestamps: true }
);
//'polls' is the collection(table in SQL) 'urlSchema' (structure)
const ModelClass = mongoose.model('polls', pollSchema);
//Exports or allows other files to use ModelClass will be used in app.js
module.exports= ModelClass;
