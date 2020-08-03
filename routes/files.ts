// @ts-ignore
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('Hi');
});

// @ts-ignore
module.exports=router;