let bord = "";
let veld = 8;

for(let y = 1; y <= veld; y++){ //om de 8 een y erbij

    for(let x = 1; x <= veld; x++){ //x zelfde grootte als veld

       //x + y deelbaar door 2 -> voeg # toe.
        if((x + y) % 2 == 0 ){
            bord += "#";
        }
       //x + y niet deelbaar door 2 -> voeg spatie toe.
        else{
            bord += " ";
        }
}
//enter
bord += "\n";
}
//log het speelbord
console.log(bord);
