const express = require('express');
var parseurl =require('parseurl');
var session =require('express-session');
const path = require('path');

const app = express();

app.use(session({
    secret: 'salt secret',
    resave: false,
    saveUninitialized:false,
}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: false }));

app.use(function(req,res,next){
    if(!req.session.list){
        req.session.list={};
    }
    next();
})

app.get('/', (req, res) => {
  res.locals.list = list;
  res.render("list");
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'form.html'));
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(303, "/");
    
});

app.listen(3000);