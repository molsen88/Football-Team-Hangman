//Declared variables

let teams = [
  "Liverpool",
  "Manchester City",
  "Tottenham",
  "Chelsea",
  "Manchester United",
  "Arsenal",
  "Everton",
  "Burnley",
  "Wolverhampton",
  "Newcastle United",
  "Norwich City",
  "West Ham United",
  "Southampton",
  "Brighton",
  "Wigan Athletic",
  "Crystal Palace",
  "Aston Villa",
  "Leicester City",
  "Sheffield United",
  "Watford",
  "Bournemouth",
  "Reading",
  "Ipswich Town",
  "Swansea",
  "Sunderland",
  "Preston",
  "Birmingham",
  "Portsmouth",
  "Leeds United",
  "West Brom",
  "Stoke City",
  "Queens Park Rangers",
  "Fulham",
  "Blackburn",
  "Millwall",
  "Derby County",
  "Charlton",
  "Hull City",
  "Huddersfield",
  "Middlesbrough",
  "Barnsley",
  "Bristol City",
  "Brentford",
  "Bolton",
  "Wycombe",
  "Salford City",
  "Nottingham Forest",
  "Coventry",
  "Blackpool",
  "Cardiff City",
  "Peterborough",
  "Rotherham",
  "MK Dons",
  "Plymouth Argyle",
  "Sheffield Wednesday",
  "Oxford United",
  "Ipswich Town",
  "Cheltenham",
  "Cambridge United",
  "Accrington Stanley",
  "Shrewsbury",
  "Burton",
  "Lincoln City",
  "Fleetwood",
  "Gillingham",
  "Morecambe",
  "AFC Wimbledon",
  "Doncaster",
  "Crewe Alexandra",
  "Barcelona",
  "Real Madrid",
  "Sevilla",
  "Valencia",
  "Levante",
  "Atletico Madrid",
  "Villareal",
  "Real Sociedad",
  "Real Betis",
  "Atheltic Club",
  "Osasuna",
  "Rayo Vallecano",
  "Getafe",
  "Elche",
  "Granada",
  "Mallorca",
  "Cadiz",
  "Alaves",
  "Celta Vigo",
  "Espanyol",
  "FC Bayern Munchen",
  "RB Leipzig",
  "Borussia Dortmund",
  "Hamburg",
  "Augsburg",
  "Bayer Leverkusen",
  "Union Berlin",
  "FC Koln",
  "SC Freiburg",
  "Eintracht Frankfurt",
  "Mainz",
  "Monchengladbach",
  "VfL Bochum",
  "Wolfsburg",
  "Hertha Berlin",
  "Hoffenheim",
  "Arminia",
  "Furth",
  "AC Milan",
  "Inter Milan",
  "Juventus",
  "Atalanta",
  "Napoli",
  "Torino",
  "AS Roma",
  "Sampdoria",
  "Bologna",
  "Fiorentina",
  "Sassuolo",
  "Genoa",
  "Verona",
  "Empoli",
  "Cagliari",
  "Spezia",
  "Salernitana",
  "Venezia",
  "Udinese",
  "Lazio",
  "Real Salt Lake",
  "Seattle Sounders FC",
  "New York City FC",
  "New England Revolution",
  "Columbus Crew",
  "FC Cincinnati",
  "Portland Timbers",
  "Atlanta United FC",
  "Austin FC",
  "DC United",
  "FC Dallas",
  "Houston Dynamo FC",
  "Charlotte FC",
  "New York Red Bulls",
  "CF Montreal",
  "Orland City SC",
  "Minnesota United FC",
  "Chicago Fire",
  "Colorado Rapids",
  "Nashville SC",
  "Los Angeles FC",
  "San Jose Earthquakes",
  "Vancouver Whitecaps",
  "Sporting Kansas City",
  "Philadelphia Union",
  "Toronto FC",
  "Inter Miami CF",
  "LA Galaxy",
  "St. Louis City SC",
];
// GLOBAL VARIABLES
let lettersGuessed = [];
let underscores = [];
let choiceUnderscore, userInput, inputValue;
let manualLower;
let manualUpper;
let correctLetters = [];
let guessesLeft = 10;
let duplicate = [];
let wordSplit;
let spaces;
let correctUnderscores;
let wins = 0;
let losses = 0;
let total;
let choice;
let checkAnswer;

startGame = () => {
  guessesLeft;
  lettersGuessed = [];
  correctLetters = [];
  duplicate = [];
  document.getElementById("guesses-left").innerHTML = `You have ${guessesLeft} guesses left!`;
  document.getElementById("letters-guessed").innerHTML = `Letters Guessed: ${lettersGuessed} `;
  getTeam();
};

// 1. Get a team
getTeam = () => {
  choice = teams[Math.floor(Math.random() * teams.length)];
  checkAnswer = choice.toLowerCase();
  console.log(choice);
  let twoWords = choice.split(" ");
  if (twoWords.length > 1) {
  }
  wordSplit = choice.split("");
  let getSpaces = wordSplit;

  // 2. Loop through each element and replace it with an underscore

  wordSplit.forEach((element) => {
    let spaces = element.replace(element, "_");
    underscores.push(spaces);
  });
  // console.log( underscores );

  underscores = underscores.map((el, index) => {
    if (getSpaces[index] === " ") {
      el = " ";
    }
    return el;
  });
  document.getElementById("guess-spot").innerHTML = underscores.join("");

  total = underscores.filter((el) => {
    if (el !== " ") {
      return el;
    }}).length;
};

// 3. Getting the user input and checking for a correct guess

getUserInput = () => {
  let modal = document.querySelector(".answer-modal");
  document.getElementById("answer-button").addEventListener("click", function () {
      modal.style.display = "block";
    });

  document.getElementById("user-answer-input").addEventListener("keydown", function (e) {
      let userAnswerInput = document.getElementById("user-answer-input").value;
      if (e.keyCode === 13) {
        e.preventDefault();
        console.log(choice);
        userAnswerInput = userAnswerInput.toLowerCase();
        if (userAnswerInput !== choice.toLowerCase()) {
          alert("Wrong");
          modal.style.display = "none";
          guessesLeft -= 1;
          document.getElementById("guesses-left").innerHTML = `You have ${guessesLeft} guesses left!`;
        }
      }
      if (userAnswerInput === choice.toLowerCase()) {
        alert("You Win");
        modal.style.display = "none";
        document.getElementById("guess-spot").innerHTML = choice;
      }
    });

  document.getElementById("user-input").addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        let userInput = document.getElementById("user-input").value;
        let upper = userInput.toUpperCase();
        let lower = userInput.toLowerCase();

        document.getElementById("user-input").value = "";


        

        if ( !lettersGuessed.includes( userInput ) ) {
          lettersGuessed.push( userInput );
          console.log( lettersGuessed )
          console.log(correctLetters)
          if ( !checkAnswer.includes( userInput ) ) {
            console.log( checkAnswer )
            guessesLeft -= 1;
            document.getElementById( "guesses-left" ).innerHTML = `You have ${guessesLeft} guesses left!`
          } else {
             
            guessesLeft = guessesLeft;
          }
        }else {
            alert("Letter already chosen")
          }
        
        if ( checkAnswer.includes( userInput ) ) {
          if ( !correctLetters.includes( userInput ) ) {
            correctLetters.push( userInput )  
          }
            
        }

        
        //loop through an array for duplicates and pop/remove if there's a match

        
        // for (let j = 0; j <= lettersGuessed.length; j++) {
        //   for (let k = j; k <= lettersGuessed.length; k++) {
        //     if (j != k && lettersGuessed[j] == lettersGuessed[k]) {
              // lettersGuessed.pop();
              // alert( "letter already chosen" );
        //       console.log(lettersGuessed)
        //       correctLetters.pop( userInput );
        //     }
        //   }
        // }

        document.getElementById("letters-guessed").innerHTML = `Letters Guessed: ${lettersGuessed}`;

        for (var i = 0; i < wordSplit.length; i++) {
          if (
            userInput === wordSplit[i] ||
            upper === wordSplit[i] ||
            lower === wordSplit[i]
          ) {
            // correctLetters.push(userInput);
            underscores[i] = wordSplit[i];
            console.log(underscores);
            let guessSpot = document.getElementById("guess-spot");
            guessSpot.innerHTML = underscores.join("");
            console.log( underscores );
          }
        }

        if ( guessesLeft === 0 ) {
          alert( "Game Over!" );
          location.reload();
        }

        //Winning the game

        if (underscores.join('') === choice) {
          alert("You Win");
          location.reload();
        }

        guessesLeft = guessesLeft;
      }
    });
};

//Button for those who give up too easily
newGame = () => {
  document.getElementById("new-game").addEventListener("click", function () {
    location.reload();
  });
};

startGame();
getUserInput();
newGame();

//TO DO

// 1. Record wins and losses

// 2. Reset game instead of reload.
