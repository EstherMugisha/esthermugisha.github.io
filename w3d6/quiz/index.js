const express = require('express');
const app = express();
const path=require("path");

let list = [];
let item;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  list.push(item);
  res.render("form",{
    i:item,
    listofItems: list,
    pageTitle: "W4D1 Quiz",
    head: "the Unordered list",
  })
 
});

app.get('/add', (req, res) => {
    res.render("output",{
        text: "Enter Text",
        submit: "Submit",
        pageTitle: "W4D1 Quiz",
    })
});

app.post('/add', (req, res) => {
    list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);