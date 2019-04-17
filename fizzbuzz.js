for(var num = 1; num <= 100; num++){ //loop 100x
var uitkomst = "";  //lege string voor woord
    if(num % 2 == 0 && num % 5 ==0){ uitkomst = "FizzBuzz"; } //Check voor 2 & 5's
    else if(num % 3 == 0){ uitkomst = "Fizz"; }
    else if(num % 5 == 0){ uitkomst = "Buzz"; }

console.log(uitkomst || num); //check of true of false

}
