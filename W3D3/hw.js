	var add=(function(){
    var counter =0;

    return{
    add: function(){
        counter+=1;
    },
    reset: function(){
        counter=0;
    },
    value:function(){
        return counter;
    }
    }
    })();

    console.log(add.value());
    add.add();
    console.log(add.value());
    add.add();
    console.log(add.value());
    add.reset();
    console.log(add.value());

    