// functie + argument
function isEven(num){
    if(num == 0){ //als het nummer gelijk is aan 0 return true
        return true;
    }
    else if (num == 1){ //als het nummer gelijk is aan 1 return false
        return false;
    }
    //Controleer of het nummer negatief is
    else if (num < 0 ){
        return false;
    }
    else{
        return isEven(num -2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
