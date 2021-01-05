const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// rendering all blog posts on homepage
router.get("/", (req, res) => {
  // console.log(req.session);
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // serializing the data object down to only required properties
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // rendering the homepage.handlebars template
      // data to pass into handlebars template has to be in an object format
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.get("/login", (req, res) => {
  // redirecting to homepage once successfully loggedin
  if (req.session.loggedIn) {
    res.redirect("/");

    return;
  }
  // login form doesn't require any variables from posts
  res.render("login");
});

// rendering a single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });
      console.log(post, "The first comment: ", post.comments[0].comment_text);
      // passing data as object to single-post handlebars template
      // and the loggedIn variable to enable conditional rendering accordingly
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
