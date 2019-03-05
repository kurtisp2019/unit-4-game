/**
 * 
 *      This is game.js
 * 
 */

class Game{
     
    // fields
    m_nNumWins = 0;
    m_nNumLoses = 0;
    m_nPlayerScore = 0;
    m_nRandomNum = 0;
    m_nCrystalVals = [];

    // constructors
    constructor() {
            
    }

    update() {
        
    }

    // methods

    // reset the game
    reset() {
         // generate a number for the user to guess
         this.m_nRandomNum = this.genRandNum(19, 120);

         // add some random values to represent the crystals
         this.m_nCrystalVals.push(this.genRandNum(1, 12));
         this.m_nCrystalVals.push(this.genRandNum(1, 12));
         this.m_nCrystalVals.push(this.genRandNum(1, 12));
         this.m_nCrystalVals.push(this.genRandNum(1, 12));
    }

    checkForInput() {
// crystal 1
$("#crystal-1").click(function () {
    alert("it works1!");
});

// crystal 2
$("#crystal-2").click(function () {
    alert("it works2!");
});

// crystal 3
$("#crystal-3").click(function () {
    alert("it works3!");
});

// crystal 4
$("#crystal-4").click(function () {
    alert("it works4!");
});
    }

    // initialize the game
    initialize() {

        this.reset();
    }

    genRandNum(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
}


/**********************************************************************
 * Game logic
 **********************************************************************/

var game = new Game();
game.initialize();
game.checkForInput();




