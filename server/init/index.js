const mongoose = require('mongoose');
const initData = require('./data.js');
const User = require('../models/user.js');

const MONGO_URL = "mongodb+srv://horror12:wk8g1ar2XHUS8VJQ@cluster0.gspfp6x.mongodb.net/deepesh"; 

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async() => {
    await User.insertMany(initData.data);
};

initDB();