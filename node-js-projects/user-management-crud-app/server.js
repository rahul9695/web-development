const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path : 'config.env'})
const PORT = process.env.PORT || 8080  

//log requests
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

//parser to bosy parser
app.use(bodyparser.urlencoded({extended : true}))

//set view engine
app.set("view engine", "ejs")
// if we want to shift view engine in another folder, specifiy the path as a const and do the below process.
// app.set("views", path.resolve(__dirname, "views/ejs")) (const path is also required above for this example);
// in this example we stored our code inside 'views' in "ejs" folder

//load Assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use('/', require('./server/routes/router')); 

app.listen(3000, () => {console.log(`Server is running on http://localhost:${PORT}`)}); 