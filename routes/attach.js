var router = require('express-promise-router')();
var Promise = require('bluebird');
var lxc = require('lxc')();

router.get('/:name', function(req, res) {
    res.render('attach', {
        title: 'LXC Attach Container',
        name: req.params.name
    });
});

router.post('/:name', function(req, res) {

    var name = req.params.name;
    var command = req.body.command;

    return new Promise(function(resolve, reject) {

        lxc.attach(name, command, function onComplete(error, output) {

            if (error) {
                reject({
                    stack: error
                });
            } else {
                resolve(output);
            }

        });

    }).then(function(data) {
        res.render('attach', {
            title: 'LXC Attach Container',
            output: data
        });
    });

});


module.exports = router;
