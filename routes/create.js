var router = require('express-promise-router')();
var Promise = require('bluebird');
var lxc = require('lxc')();

router.get('/', function(req, res) {
    res.render('create', {
        title: 'LXC Create Container'
    });
});

router.post('/', function(req, res) {

    var template = req.body.template;
    var name = req.body.name;

    if (req.body.arguments) {
        template += " -- " + req.body.arguments;
    }

    return new Promise(function(resolve, reject) {
        let data = '';

        lxc.create(name, template, null, function onData(str) {
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


router.post('/preset', function(req, res) {
	
    var template = "download -- " + req.body.presets;
	var name = req.body.name;

    return new Promise(function(resolve, reject) {
        let data = '';

        lxc.create(name, template, null, function onData(str) {
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
