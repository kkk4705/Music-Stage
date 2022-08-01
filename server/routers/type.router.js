const router = require('express').Router();
const { Type } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const allTypes = await Type.findAll({ raw: true });
    console.log(allTypes);
    res.json({ allTypes });
  });
module.exports = router;
