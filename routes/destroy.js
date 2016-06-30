var router = require('express-promise-router')();
var Promise = require('bluebird');
var lxc = require('lxc')();

router.get('/:name', function(req, res) {
    res.render('destroy', {
        title: 'LXC Destroy Container',
        name: req.params.name
    });
});

router.post('/:name', function(req, res) {

    var name = req.params.name;

    return new Promise(function(resolve, reject) {
        let data = '';

        lxc.destroy(name, function onData(str) {
            data += str;
        }, function onComplete(exitCode, errors) {

            if (exitCode !== null) {
                reject({
                    status: exitCode,
                    stack: errors
                });
            } else {
                resolve(data);
            }

        });

    }).then(function(data) {
        res.redirect('/');
    });

});

module.exports = router;
