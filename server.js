const path = require("path");
const express = require("express");

const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.port || 3001;

const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting static files to the public dir
app.use(express.static(path.join(__dirname, "public")));

// Setting handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
