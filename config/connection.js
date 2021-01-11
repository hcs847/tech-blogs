const Sequelize = require("sequelize");
require("dotenv").config();

// Initializing connection to database locally or through JAWSDB->Heroku
let sequelize;

// routing to remote or local db
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
}

module.exports = sequelize;
