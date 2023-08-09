const mongoose = require('mongoose');
import { MongoClient} from 'mongodb';

const MongoClient = new MongoClient('mongodb+srv://admin:rdmUIP5GeBHtQFso@inotebook.eb1byzd.mongodb.net/Customers?retryWrites=true&w=majority')


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connceted to Mongoose successfully");
    })
}

module.exports = connectToMongo;