// Khai bao app
var express = require('express');
var app = express();

// Khai bao router
var productRouter = require('./routes/products/product.router');
var userRouter = require('./routes/users/user.router');

// Khai bao cho pug
app.set('view pug', 'pug');
app.set('views', './views');

// Khai bao su dung static file
app.use(express.static('public'));

// Khai bao su dung req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index');
});

// Khai bao router
app.use('/users', userRouter);
app.use('/products', productRouter);

//Khoi dong Server
app.listen(3000, function(){
    console.log('server listening on port 3000');
});