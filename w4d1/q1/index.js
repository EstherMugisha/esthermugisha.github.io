const express= require("express");
const app=express();
const path=require("path");
const cookieParser= require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    if(req.cookies.remember){
        res.send('Remembered: ).click to  <a href=\'/forget\'>forget</a>');
    }
     else{
    output = `<table>
    <thead>
    <tr>
        <th> cookie Key </th>
        <th> cookie Value </th>
    </tr>
    </thead>
    <tbody>`;

    for(let key in req.body.remember){
        output +=`<tr><td> ${req.body.key} </td><td> ${req.body.val}</td></tr>`
    }
    output +=`<form action="/addCookie" method="post">
    <label> <input name="key" type="text"> Key </label>
    <label><input name="val" type="text">Value </label>
    <button name="btn" type="submit">Submit</button>`;

    res.send(output);
    }
});

app.post('/addCookie',(req,res)=>{
    if(req.body.remember){
        res.cookie('remember',1);
    }
    res.redirect(303,'/');
});

app.get('/forget',(req,res)=>{
    res.clearCookie('remember');
    res.redirect('back');
})

app.listen(3000,()=>{
    console.log("Started on PORT 3000");
}
)


