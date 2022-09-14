const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const authCtrl = require("./controllers/auth");
const userCtrl = require("./controllers/users");
const listCtrl = require("./controllers/lists");
const movCtrl = require("./controllers/movies");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.error(err);
    });
app.use(express.json());

app.use("/api/auth", authCtrl);
app.use("/api/users", userCtrl);
app.use("/api/lists", listCtrl);
app.use("/api/movies", movCtrl); 

app.listen(8800, () => {
    console.log("Backend service running")
});