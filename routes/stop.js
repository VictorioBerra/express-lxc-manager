var router = require('express-promise-router')();
var Promise = require('bluebird');
var lxc = require('lxc')();

router.get('/:name', function(req, res) {
    res.render('stop', {
        title: 'LXC Stop Container',
        name: req.params.name
    });
});

router.post('/:name', function(req, res) {

    var name = req.params.name;

    return new Promise(function(resolve, reject) {
        let data = '';

        lxc.stop(name, function onComplete(errors, output) {

            if (errors) {
                reject({
                    stack: errors
                });
            } else {
                resolve(output);
            }

        });

    }).then(function(data) {
        res.redirect('/');
    });

});

module.exports = router;
