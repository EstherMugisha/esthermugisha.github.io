class Duck{
    constructor(){
    this.flying=false;
    this.quacking=false;
    this.xPos=0;
    this.yPos=0;
    }
    takeOff(){
    this.flying=true;
    }
    startQuacking(){
    this.quacking=true;
    }
    stopQuacking(){
    this.quacking=false;
    }
    moveTo(x,y){
    this.xPos=x;
    this.yPos=y;
    if(this.flying==true && this.quacking==true){
    console.log("Duck is flying to " +x +" "+ y +" while quacking")
    }
    else if(this.flying==true && this.quacking==false){
        console.log("Duck is flying to " +x +" "+ y +" while mute")
    }
    }
    }
    module.exports=Duck