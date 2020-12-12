const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/searchlist"
);

const searchSeed = [
    {
        search: "Mashed Potatoes"
    },
    {
        search: "Mac and Cheese"
    },
    {
        search: "Roast Chicken"
    },
    {
        search: "Ice Cream"
    },
    {
        search: "Apple Pie"
    },
    {
        search: "California Roll"
    },
    {
        search: "Beef Ramen"
    },
    {
        search: "Guacamole"
    },
    {
        search: "Beef Tacos"
    },
    {
        search: "Seared Steak"
    },
    {
        search: "Fudge Brownies"
    },
    {
        search: "Spaghetti"
    },
    {
        search: "Pancakes"
    },
    {
        search: "Rice"
    },
    {
        search: "Broccoli"
    },
    {
        search: "Ranch Dressing"
    },
    {
        search: "Coke"
    },
    {
        search: "Eggplant"
    },
    {
        search: "Chicken Marsala"
    },
    {
        search: "Danish Blue Cheese"
    },
    {
        search: "Crackers"
    },
]