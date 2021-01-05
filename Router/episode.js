const router = require('express').Router();
const { seasons, comments } = require('../Modules/controllers')

router.get("/seasons", seasons)

router.post("/comments", comments)

module.exports = router;