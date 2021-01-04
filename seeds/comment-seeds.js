const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Love this content!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Exactly what I was looking for.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Very inspiring.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Can't wait for the next blog.",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;
