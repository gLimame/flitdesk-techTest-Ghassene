const router = require('express').Router();
const bodyParser = require('body-parser')

const { seasons } = require('../Controllers/seasons.controller')
const { comments } = require('../Controllers/comments.controller')

const jsonParser = bodyParser.json();

router.get("/seasons", seasons);
router.post("/comments", jsonParser, comments);

module.exports = router;