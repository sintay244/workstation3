var Auth = require('./auth');
var Kid = require('./dash');
var Med= require ('./med');
module.exports = (app) => {
    app.get('/', (req,res) => {
        // res.redirect('/login'); // I don't have a landing page, so just redirect to the login page!
        res.render('auth.html')
    });

    app.get('/login', Auth.render)  // login page
    app.get('/logout', Auth.logout) // logout route + redirect

    app.post('/login', Auth.login);         
    app.post('/register', Auth.register)    
    app.all('/dashboard', Auth.middlewares.session);
    app.get('/dashboard', (req, res) => {
    res.render('dashboard.html', req.session);   
    
    });
    app.get('/api/kids', Kid.get);
    // app.post('/api/kids', Kid.upsert);

    // app.get('/api/meds', Med.allMeds); // Find Many
    // app.get('/api/meds/:id', Med.get); // Find One
    // app.post('/api/meds', Med.upsert); // Create
    // app.post('/api/meds/:id', Med.upsert); // Update 
    app.post('/api/kids',Kid.creat);  

    app.delete('/api/kids/:id',Kid.remov);  
    // app.post('/api/kids/:id',Kid.update);  

  }
