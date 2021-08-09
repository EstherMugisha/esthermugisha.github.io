const express=require("express"); 
const path=require("path");
const app=express();
const contents =[];
let item; 

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.render("product",{
        pageTitle: "product",
        name: "Name",
        price:"Price",
        description:"Description",
        id: "ID",
        add: "Add to Cart"
    });

});

app.post('/addToCart',(req,res) =>{
    console.log(req.body);
item={
    name :req.body.name,
    price: req.body.price,
    description: req.body.descr,
    id :req.body.id,
}
contents.push(item);

res.render("shoppingCart",{
      pageTitle: "product",
      head:"shopping list: ",
      listofItems: contents,
})
    
})


app.listen(3000);