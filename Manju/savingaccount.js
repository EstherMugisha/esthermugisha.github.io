class SavingAccount extends Account {
    constructor(number,interest) {
        super(number);
        this.setInterest(interest);
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }
    addInterest(){
       this._balance+= this._balance * interest / 100;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance +": Interest "+this._interest;
    }

    endOfMonth() {
        return "Interest added SavingsAccount 2: balance: "+ this._balance +" interest: "+this._interest;
    }

}