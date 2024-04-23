var express = require("express");
var router = express.Router();

const {
  fetch,
  create,
  update,
  remove,
} = require("../controller/userController");

/* GET users listing. */
router.get("/", fetch);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id",remove);
module.exports = router;
