const router = require("express").Router();
const searchRoutes = require("./search");

// Search Routes
router.use("/search", searchRoutes);
module.exports = router;