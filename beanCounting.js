// Aanmaken van functie die aantal B's telt
function countBs(x){ //neem het woord dat mee gegeven wordt
    console.log(countChar(x,"B")); //tel de aantal capital b's in het woord en log deze.
}


function countChar(x, karakter){ //Gebruik het woord en de gekozen karakter
    var counter = 0; //houd bij hoevaak het karakter gebruikt wordt.
    for(var count = 0; count < x.length; count++){ //loop door het woord voor het aantal karakters
        if(x[count] == karakter){ //als het karakter in het woord voorkomt geef counter +1
            counter ++;
        }
    }
    console.log(counter); //Log het resultaat
}

countBs("BBC"); //roep functie aan + parameter

countChar("kakkerlak", "k"); //roep functie aan + parameter
