const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const wrapAsync = require('./utils/wrapAsync');
const UserAuth = require('../models/userAuth');
const User = require('./models/user');


const MONGO_URL = "mongodb+srv://horror12:wk8g1ar2XHUS8VJQ@cluster0.gspfp6x.mongodb.net/deepesh"; 

main().then(()=>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main () {
    await mongoose.connect(MONGO_URL);
};

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

// Root Route
app.get("/", (req, res) => {
    res.send("Hi, I am root!")
})

app.get("/auth", (req, res) => {
    res.render("users/signup.ejs");
})

app.post('/auth',wrapAsync (async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const user = new User({ username, email, image: { data: imageData.data, contentType: imageData.contentType } });

        await user.save();

        const encryptedPassword = encryptPassword(password);

        const userAuth = new UserAuth({ email, password: encryptedPassword });

        await userAuth.save();


        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {

        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));

// Simple encryption function (for demonstration purposes only)
function encryptPassword(password) {
    // Simple encryption technique (e.g., reversing the password)
    return password.split('').reverse().join('');
}


// PAGE NOT FOUND MIDDLEWARE
// app.all("*", (req, res, next) => {
//     next(new E)
// })

//  Error Handling Middleware
app.use((err, req, res, next) => {

    res.status(400).render("something is wrong!");
})
app.listen(3030, () => {
    console.log("server is listening to port 3030");
});