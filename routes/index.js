var router = require('express-promise-router')();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'express'
    });
});

module.exports = router;