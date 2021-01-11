const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const session = require("express-session");
// store the sessions created by express-session into database
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// setting up an express.js session and connecting it to db
// const sess = {
//   secret: "super secret secret",
//   // setup session to use cookies
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

const sess = {
  secret: process.env.SESSION_SECRET,
  rolling: true, // <-- Set `rolling` to `true`
  secureProxy: true,
  cookie: {
    httpOnly: true,
    maxAge: 120000, //2 hours;
  },
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

// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Now listening");
  });
});
