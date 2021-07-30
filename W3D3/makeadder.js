var add=(function(){
    var counter =0;
    return function(input){
         counter+=input;
         return counter;
    }
    })();

var make_adder = function(inc) {
    return function()
    {
        return add(inc)
    }
    };


    var add5 = make_adder(5);
    add5();
    add5()
    console.log(add5());