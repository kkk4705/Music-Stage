const router = require('express').Router();
const fileMiddleware = require('../middleware/multer');

router.post('/', fileMiddleware, (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
