var router = require('express-promise-router')();
var Promise = require('bluebird');
var lxc = require('lxc')();

router.get('/', function(req, res) {

    var listAsync = Promise.promisify(lxc.list);

    return listAsync()
        .then(function(containers) {
            res.render('index', {
                title: 'LXC Manager Home',
                containers: containers,
                containercount: Object.keys(containers).length
            });
        });
});

module.exports = router;
