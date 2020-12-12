const mongoose = require("mongoose");
const { search } = require("./routes");
const Schema = mongoose.Schema;

const searchSchema = new Schema ({
    search: { type: String, required: true }
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;