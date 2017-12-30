//Require Express
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const POLL = require("./server-models/poll-model");
//Create our app and instantiate instances
const app = express();
//Instantiante instances
//Allows post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Connect to our MongoDB Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/polls");

app.use(express.static(path.join(__dirname, "dist")));

// TODO make a POST
app.post("/poll/post", (req, res) => {

  let poll = new POLL();
  poll.question = req.body.question;
  poll.options = req.body.options;
  poll.createdBy = req.body.createdBy;

  poll.save(function(err) {
      if (err){
        res.send(err);
      }
     return res.json({ message: 'Success' });
  });


  // POLL.create(req.body, (err, small) => {
  //   if (err) {
  //     return err;
  //   }
  //   return "Success";
  // });
  // return "Success";
});

// Return all polls in the database
app.get("/poll/getAll", (req, res) => {
  POLL.find((error, data) => {
    if (error) {
      return error;
    }
    return res.json(data);
  });
});

// Update the Poll
app.put("/poll/put/:id", (request, response) => {
  const _id = request.params.id;
  let poll = request.body;

  POLL.update({ _id }, poll, error => {
    if (error) {
      return error;
    }
    return "Updated Successfully";
  });
});

// Get polls by a specific user
app.get("/poll/get/byuser/:username", (request, response) => {
  const username = request.params.username;
  POLL.find({ createdBy: username }, (error, data) => {
    if (error) {
      return error;
    }
    return response.json(data);
  });
});

// Return a single poll by id
app.get("/poll/get/:id", (request, response) => {
  const id = request.params.id;
  POLL.findById(id, (error, data) => {
    if (error) {
      return error;
    }
    return response.json(data);
  });
});

app.get("/", (req, res) => {
  return res.send("Invalid page");
});

//Listen to see if everything is working and launching properly locally or on heroku
app.listen(process.env.PORT || 3000, () => {
  console.log("Express server running");
});
