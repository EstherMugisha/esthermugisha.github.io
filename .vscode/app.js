const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log('Your Server is running on 3000');
})
app.set('port',process.env.PORT || 3000);
const port=app.get('port');