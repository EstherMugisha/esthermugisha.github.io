const Employee=( function(){
    let name;
    let age;
    let salary; 
    let getName =function(){
        return name;
    }
    let getAge=function(){
        return age;
    }
    let getSalary=function(){
        return salary;
    }

    return{
        setName:function(thename){
            name=thename;
        },
        setAge:function(theage){
            age=theage;
        },
        setsalary:function(thesalary){
            salary=thesalary;
        },
        increaseSalary: function(percentage){
            return getSalary +=getSalary*percentage;
        },
        incrementAge:function(){
            getAge+=1;
            return getAge;
        }
    }
})

const me =Employee();
me.setName("Esther");
me.setAge(25);
me.setsalary(200000);
me.increaseSalary(0.5);
me.incrementAge();
console.log(me.);

