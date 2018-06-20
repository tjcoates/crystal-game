var counter = [];
var gameReady = true;
var randomNumber = 0;
var redRandom = 0;
var blueRandom = 0;
var yellowRandom = 0;
var purpleRandom = 0;
var testCounter = 0;

function sum(numbers) {
    return numbers.reduce(function(a,b) {
      return a + b
    });
  }

function createNumber() {
 randomNumber=[Math.floor(Math.random() * 100) +50];
 }

function redNumber() {
redRandom=[Math.floor(Math.random() * 10) +1];
}

function blueNumber() {
blueRandom=[Math.floor(Math.random() * 10) +1];
}

function yellowNumber() {
yellowRandom=[Math.floor(Math.random() * 10) +1];
}

function purpleNumber() {
purpleRandom=[Math.floor(Math.random() * 10) +1];
}

function startGame() {
gameReady=false;
createNumber();
redNumber();
blueNumber();
yellowNumber();
purpleNumber();
};

function empty() {
        counter.length = 0;
}

function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }

$("#startButton").on("click", function () {
    startGame();
    document.getElementById("numberToGuess").innerHTML= randomNumber;
    empty(counter);
    testCounter = 0;
    document.getElementById("currentCounter").innerHTML= sum(counter);
    // console.log(gameReady);
    // console.log(randomNumber);
    // console.log(redRandom);
    // console.log(blueRandom);
    // console.log(yellowRandom);
    // console.log(purpleRandom);
});

$("#red").on("click", function () {
    if (gameReady == true) {
    }

    if (gameReady == false) {
        counter.push(redRandom);
        document.getElementById("currentCounter").innerHTML= sum(counter);
        redRandom = parseInt(redRandom);
        testCounter += redRandom;
        // console.log(testCounter);
        
    }
    
    if (gameReady == false && testCounter == randomNumber) {
        alert("You Win!");
    }

    else if (gameReady == false && testCounter >= randomNumber) {
        alert("You Lose");        
    }

    
});

$("#blue").on("click", function () {
    if (gameReady == true) {
    }

    if (gameReady == false) {
        counter.push(blueRandom);
        document.getElementById("currentCounter").innerHTML= sum(counter);
        blueRandom = parseInt(blueRandom);
        testCounter += blueRandom;
        // console.log(sum(counter));
        
    }
    
    if ( gameReady == false && testCounter == randomNumber) {
        alert("You Win!");        
    }

    else if (gameReady == false && testCounter >= randomNumber) {
        alert("You Lose");        
    }

    
});

$("#yellow").on("click", function () {
    if (gameReady == true) {
    }

    if (gameReady == false) {
        counter.push(yellowRandom);
        document.getElementById("currentCounter").innerHTML= sum(counter);
        yellowRandom = parseInt(yellowRandom);
        testCounter += yellowRandom;
        // console.log(sum(counter));
        
    }
    
    if (gameReady == false && testCounter == randomNumber) {
        alert("You Win!");        
    }

    else if (gameReady == false && testCounter >= randomNumber) {
        alert("You Lose");        
    }

    
});

$("#purple").on("click", function () {
    if (gameReady == true) {
    }

    if (gameReady == false) {
        counter.push(purpleRandom);
        document.getElementById("currentCounter").innerHTML= sum(counter);
        purpleRandom = parseInt(purpleRandom);
        testCounter += purpleRandom;
        // console.log(sum(counter));
        
    }
    
    if (gameReady == false && testCounter == randomNumber) {
        alert("You Win!");        
    }

    else if (gameReady == false && testCounter >= randomNumber) {
        alert("You Lose");        
    }

    
});