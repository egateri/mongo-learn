const dotevn = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
// initialise express
const app = express();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
app.set("view engine", "ejs");
app.set(dotevn);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(indexRouter);
app.use(usersRouter);
app.use(registerRouter);
app.use(loginRouter);
const PORT = process.env.PORT;
// Server listen
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));