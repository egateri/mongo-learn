const express = require("express");
const db = require('./config/db-config')
const PORT = process.env.PORT||5500;
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const app = express();
app.set("view engine", "ejs");
app.set(db);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(indexRouter);
app.use(usersRouter);
app.use(registerRouter);
app.use(loginRouter);
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));