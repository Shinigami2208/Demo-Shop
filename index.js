require('dotenv').config();
console.log(process.env.SESSION_SECRET);
// Khai bao app
var express = require('express');
var app = express();

// Khai bao router
var productRouter = require('./routes/products/product.router');
var userRouter = require('./routes/users/user.router');
var authRouter = require('./routes/auth/auth.router');

// Khai bao auth middlewares
var authMiddlewares = require('./middlewares/auth.middlewares');

// Khai bao cho pug
app.set('view engine', 'pug');
app.set('views', './views');

// Khai bao su dung static file
app.use(express.static('public'));

// Khai bao su dung req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Khai bao cookie parser
var cookieParser = require('cookie-parser');
app.use(cookieParser('process.env.SESSION_SECRET'));

app.get('/',authMiddlewares.requireAuth, function(req, res){
    res.render('index');
});

// Khai bao router
app.use('/users',authMiddlewares.requireAuth, userRouter);
app.use('/products',authMiddlewares.requireAuth, productRouter);
app.use('/auth', authRouter);

//Khoi dong Server
app.listen(3000, function(){
    console.log('server listening on port 3000');
});