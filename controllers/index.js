const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/api", apiRoutes);
// user-facing routes
router.use("/", homeRoutes);

// middleware to throw a non found error for any request made to
// an endpoint that doesn't exists
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
