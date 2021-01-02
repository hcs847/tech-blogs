const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// middleware to throw a non found error for any request made to
// an endpoint that doesn't exists
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
