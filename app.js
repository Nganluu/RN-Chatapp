var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

//define database
var db = require('./models');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized: true}));

app.use('/', routes);
app.use('/users', users);

var server = app.listen(5000);
api(app);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//start server
// db.sequelize.sync({
//     force: false,
//     alter : true 
// }).then(function(){
//     app.listen(5000, () => {
//         console.log("Server is running at localhost: 5000")
//     })
// })

var io = require('socket.io')(server)
var chatController = require('./controllers/chatController')
io.on('connection', function(socket){
    socket.on("send-message", function(data){
        console.log("nhan duoc " + data)
    })
    chatController.getMessage(socket)
})

module.exports = app;
