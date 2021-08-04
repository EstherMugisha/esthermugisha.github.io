$(function(){
    $(".boundary").on('mouseover',turnRed);
    $("#end").on('mouseover',youWin)
    $("#start").on('click',reset)
});

function turnRed(){
    let block=$(".boundary");
    block.addClass("youlose")
    $("h2").text("Sorry, you lost. :[")
}

function youWin(){
    let block=$(".boundary");
    if(block.hasClass("youlose")){
        turnRed();
    }
    else{
    $("h2").text("you win. :]")
    }
}

function reset(){
    $("#status").text("Click the \"S\" to begin");
    let block=$(".boundary");
    if(block.hasClass("youlose")){
        block.removeClass("youlose");
    }
    $("#maze").on('mouseleave',disallowCheating)
}

function disallowCheating(){
        turnRed();
}
