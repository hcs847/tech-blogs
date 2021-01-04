const { Post } = require("../models");

const postdata = [
  {
    title: "Handlebars templates explained.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis elementum maximus. Aenean vel augue sit amet dui commodo dapibus a sed nunc.",
    user_id: 1,
  },
  {
    title: "Asynchronous vs Synchronous programming",
    content:
      "Vivamus placerat elementum odio, nec fermentum felis cursus id. Cras at leo pellentesque nisi congue ultricies eget sit amet lorem.",
    user_id: 2,
  },
  {
    title: "HTTP Requests deep dive",
    content:
      "Ut semper suscipit diam eu consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra tortor vel nisl lobortis, sed bibendum metus egestas.",
    user_id: 3,
  },
  {
    title: "Express js in details",
    content:
      "Aenean ut velit in urna dictum ultricies sit amet in lorem. Sed posuere orci sit amet odio facilisis, sit amet pulvinar leo laoreet.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
