const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:Number,
    company:String,
    Contact:Number,
    country:String
});

const Products = new mongoose.model("products",productSchema);

module.exports = Products;