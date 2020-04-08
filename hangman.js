//Declared variables

let fruits = ['Liverpool', 'Manchester City', 'Tottenham', 'Chelsea', 'Manchester United', 'Arsenal', 'Everton', 'Burnley', 'Wolverhampton',
    'Newcastle United', 'Norwich City', 'West Ham United', 'Southampton', 'Brighton', 'Wigan', 'Crystal Palace', 'Aston Villa', 'Leicester City',
    'Sheffield United', 'Watford', 'Bournemouth'];
let lettersGuessed = [];
let underscores = [];
let choiceUnderscore, userInput;
let correctLetters = [];
let guessesLeft = 10;
let duplicate = [];
let wordSplit;
let dog;
let spaces;
let correctUnderscores;




startGame = () => {
    guessesLeft = 10;
    lettersGuessed = [];
    correctLetters = [];
    duplicate = []
    document.getElementById( 'guesses-left' ).innerHTML = `You have ${guessesLeft} guesses left!`;
    document.getElementById( 'letters-guessed' ).innerHTML = `Letters Guessed: ${lettersGuessed} `;
    getTeam();
}

// 1. Get a fruit
getTeam = () => {
    let choice = fruits[Math.floor( Math.random() * fruits.length )];
    console.log( choice )
    wordSplit = choice.split( '' );
    console.log( wordSplit )
    document.getElementById( 'guess-spot' ).innerHTML = wordSplit;

    // 2. Loop through each element and replace it with an underscore

    wordSplit.forEach( element => {
        let spaces = element.replace( element, '_' )
        underscores.push( spaces )
        document.getElementById( 'guess-spot' ).innerHTML = underscores.join( " " );
    } )
    console.log( underscores )
}

// enterKey = () => {
//     let input = document.getElementById( "user-input" ).addEventListener( 'keyup', function ( event ) {
//         if ( event.keyCode === 13 ) {
//             event.preventDefault();
//             document.getElementById( "user-input" ).click()
//             console.log( input )
//         };

//     } )
// }


// 3. Getting the user input and checking for a correct guess
getUserInput = () => {

    // enterKey();
    document.getElementById( "select-button" ).addEventListener( "click", function () {
        let userInput = document.getElementById( "user-input" ).value;
        console.log( userInput )
        let upper = userInput.toUpperCase();
        // console.log( upper )
        let lower = userInput.toLowerCase();
        // console.log( lower )
        document.getElementById( 'user-input' ).value = '';

        lettersGuessed.push( userInput )



        //loop through an array for duplicates and pop/remove if there's a match
        for ( let j = 0; j <= lettersGuessed.length; j++ ) {
            for ( let k = j; k <= lettersGuessed.length; k++ ) {
                if ( j != k && lettersGuessed[j] == lettersGuessed[k] ) {
                    console.log( 'chosen' )
                    lettersGuessed.pop()
                    alert( 'letter already chosen' )
                    correctLetters.pop( userInput )
                }
            }
        }
        document.getElementById( 'letters-guessed' ).innerHTML = `Letters Guessed: ${lettersGuessed} `;

        for ( var i = 0; i < wordSplit.length; i++ ) {
            if ( userInput === wordSplit[i] || upper === wordSplit[i] || lower === wordSplit[i] ) {
                correctLetters.push( userInput );
                underscores[i] = wordSplit[i]
                console.log( underscores )
                document.getElementById( 'guess-spot' ).innerHTML = underscores.join( " " );
                console.log( 'you guessed a right letter' )
            }
        }

        var wrongChoice = ( wordSplit.indexOf( userInput ) );
        if ( wrongChoice === -1 ) {
            guessesLeft -= 1
            document.getElementById( 'guesses-left' ).innerHTML = `You have ${guessesLeft} guesses left!`;
        }

        if ( guessesLeft === 0 ) {
            alert( 'Game Over!' )
            location.reload();
        }

        //Winning the game
        if ( correctLetters.length === wordSplit.length ) {
            alert( 'You Win' )
            location.reload();
        }

    } )
}

//Button for those who give up too easily
newGame = () => {
    document.getElementById( "new-game" ).addEventListener( "click", function () {
        location.reload();
    } )
}


startGame();
getUserInput();
newGame();





