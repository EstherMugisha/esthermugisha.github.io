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

app.use(function(req,res,next){
    if(!req.session.views){
        req.session.views={};
    }
    next();
})

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res, next) => {
    const date_ob = new Date();
    const hours = date_ob.getHours();
    let style = "night.css";
    if (hours >= 6 && hours < 18) {
        style = "day.css";
    }
    res.send(`
    <!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset="utf-8">
            <title>Name and age</title>
            <link rel="stylesheet" href="css/${style}">
        </head>
        <body>
            <form method="post" action="result">
                Name <input name="nm">
                Age <input name="age">
                <input type="submit">
            </form>
        </body>
    </html>`);
});
app.post('/result', (req, res) => {
 
    req.session.views[req.body.nm]=req.body.age;
    res.redirect(303,"/output");
});
app.get('/output', (req, res) => {
    let out='<ul>';
    for(let nm in req.session.views){
        out += `<li>Name: ${nm}: Age: ${req.session.views[nm]}</li>`;
    }
    out +=`</ul>`;
    res.send(out);
});
app.listen(3000);