const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts")

dotenv.config();

const app = express();
mongoose.connect("mongodb://localhost:27017/socialMediaDB");

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(8800, ()=>{
    console.log("Backend server started!")
})