const Validator = (function(){
    let firstName =document.getElementById("first");
    let lastName = document.getElementById("last");
    const validateFirstName=function(){
        if(firstName===""){
        return false;
        }
        else{
        return true;
        }
    }
    const validateLastName=function(){
        if(lastName===""){
        return false;
        }
        else{
        return true;
        }
    }

    return{
        validate:function(){
            return validateFirstName && validateLastName;
        }
    }

})();