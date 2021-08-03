var a=12;
var b=8;
var z=x(b);
z(a,b);
function x(a){
    console.log("1:" +this+ " "+ a + " " +b);
    var b=function(b){
        if(a<=10){
            a=a*=2;
        }
        console.log("2:" +this+ " "+ a + " " +b);
    };
    console.log("3:" +this+ " "+ a + " " +b);
    return b.bind({a:5,b:20});
}