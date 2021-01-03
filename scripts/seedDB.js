const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/searchlist"
);

const covidSeed = [
]


// db.Covid
//   .remove({})
//   .then(() => db.Covid.collection.insertMany(covidSeed))
//   .then(data => {
//     console.log(data.result.n );
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
