var db = require('../../db');
var shortid = require('shortid');

module.exports.listUser = function(req, res){
    var perPage = 8;
    var indexPage = parseInt(req.query.page);
    var begin = (indexPage-1)*perPage;
    var end = perPage*indexPage;
    res.render('users/index', {
        users: db.get('users').value().slice(begin, end),
        indexPage: indexPage,
        perPage: perPage
    });
};