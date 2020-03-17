var db = require('../../db');
var shortid = require('shortid');

module.exports.listUser = function(req, res){
    var perPage = 8;
    var indexPage = parseInt(req.query.page);
    var begin = (indexPage-1)*perPage;
    var end = perPage*indexPage;
    var dbUsers = db.get('users').value();
    var lastPage = Math.ceil(dbUsers.length/perPage);
    res.render('users/index', {
        users: dbUsers.slice(begin, end),
        indexPage: indexPage,
        perPage: perPage, 
        lastPage: lastPage
    });
};