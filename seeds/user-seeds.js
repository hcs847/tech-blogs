const { User } = require("../models");

const userdata = [
  {
    username: "techie",
    password: "password123",
  },
  {
    username: "coder1",
    password: "password456",
  },
  {
    username: "jsrules",
    password: "password321",
  },
  {
    username: "asynchronous",
    password: "password654",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
