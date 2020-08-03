import express = require('express');
import * as path from "path";
require("mime");
require('http-errors');
let router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    let pat = path.join(__dirname, '../public/files')
    const options = {
        root: pat,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    const fileName = req.originalUrl.toString().replace("/f/", "");
    console.log(fileName)
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
});

module.exports = router;