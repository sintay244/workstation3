require('colors');
var express = require('express');
    bodyParser = require('body-parser');
    path = require('path');
    logger = require('morgan');
    mongojs=require('mongojs');
    ejs = require('ejs');
    mongoose = require('mongoose');
    sessions = require('client-sessions'); 
    port = process.env.PORT || 1337;
    Routes = require('./routes');
    app = express()
    // db = mongojs('member',['member']);

app.use(logger('dev'));
app.use(sessions({
    cookieName: '_medAssist', 
    secret: 'DR@G0N$', 
    requestKey: 'session', 
    duration: 86400, 
    cookie: {
        ephemeral: false,   
        httpOnly: true,     
        secure: false      
    }
}));

app.use(express.static(path.join(__dirname,'public')));
app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.set('view engine','html'); 
app.engine('html', ejs.renderFile);

mongoose.connect('mongodb://localhost/medAssist', (mongooseErr) => {
    if( mongooseErr ) {
        console.error('#ERROR#'.red,'Could not initilize mongoose!', mongooseErr);
    } else {
        console.info('Mongoose initilized!'.green.bold);
    }
});







// app.get('/api/kids', function(req,res,next) {
//     res.end("i am getting");
//     next();

// });
// app.post('/api/kids',function(req,res,next) {
//     res.end("I am posting");
//     next();
// });
Routes(app);


app.listen(port, (err) => {
    if( err ) {
        console.error('#ERROR#'.red,'Could not start server! :(');
    } else {
        console.log('\n SERVER IS UP AND RUNNING'.green.bold, 'PORT:'.yellow, port);
    }
})
