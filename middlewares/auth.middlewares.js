var db = require('../db');
module.exports.requireAuth  = function(req, res, next){
    if(!req.signedCookies.userName){
        res.redirect('auth/login');
        return;
    }

    var user = db.get('users').find({username : req.signedCookies.userName}).value();

    if(!user){
        res.redirect('auth/login');
        return;
    }

    res.locals.user = user;
    next();
}