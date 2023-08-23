require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Flight = require("./models/Flight");
const flights = require("./models/flights");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// INDUCES

app.get("/", (req, res) => {
  const styles = `
    <style>
      body {
        background-color: teal;
      }
      h1 {
        font-size: 80px;
        text-align: center;
        margin-top: 20%;
        color: yellow;
      }
    </style>
  `;

  const html = `
    ${styles}
    <h1>Hello TO MongoDB Flights TEAM !</h1>
  `;

  res.send(html);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello TO MongoDB Flights TEAM !</h1>");
// });

// Index
app.get("/flights", (req, res) => {
  Flight.find({})
    .then((allFlights) => {
      console.log(allFlights);
      res.render("flights/Index", { flights: allFlights });
    })
    .catch((error) => {
      console.error(error);
    });
});

// New
app.get("/flights/new", (req, res) => {
  res.render("flights/New");
});

// Delete

// Update

//create

// Create
app.post("/flights", (req, res) => {
  if (req.body.depart === "on") {
    req.body.depart = true;
  } else {
    req.body.depart = false;
  }

  Flight.create(req.body)
    .then((createdFlight) => {
      res.redirect("/flights");
    })
    .catch((error) => {
      console.error(error);
    });
});

// Edit

// Show
app.get("/flights/:id", (req, res) => {
  Flight.findOne({ _id: req.params.id })
    .then((foundFlight) => {
      res.render("flights/Show", {
        flight: foundFlight,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
