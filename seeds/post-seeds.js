const { Post } = require("../models");

const postdata = [
  {
    title: "Handlebars templates explained.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis elementum maximus. Aenean vel augue sit amet dui commodo dapibus a sed nunc.",
    user_id: 1,
  },
  {
    title: "Promises for Asynchronous coding",
    content:
      "Promises are templates that support asynchronous programming. E.g: a Fetch API request is pending until a promise is returned.",
    user_id: 2,
  },
  {
    title: "HTTP Requests deep dive",
    content:
      "Ut semper suscipit diam eu consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra tortor vel nisl lobortis, sed bibendum metus egestas.",
    user_id: 3,
  },
  {
    title: "The gist of TDD with Jest Framework",
    content:
      "Learn the basics of Test Driven Development to ensure your code works as expected. Implementing these principles will eliminate many unpleasant surprises of unexpected bugs.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
