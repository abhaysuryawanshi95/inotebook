const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://admin:rdmUIP5GeBHtQFso@inotebook.eb1byzd.mongodb.net/Customers?retryWrites=true&w=majority"


const connectToMongo= ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connceted to Mongoose successfully");
    })
}

module.exports = connectToMongo;