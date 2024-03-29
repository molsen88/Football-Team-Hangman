//Declared variables

let teams = [
  "Liverpool FC",
  "Manchester City",
  "Tottenham Hotspur",
  "Chelsea FC",
  "Manchester United",
  "Arsenal FC",
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
  "Juventus FC",
  "US Lecce",
  "Atalanta BC",
  "SSC Napoli",
  "Torino FC",
  "AS Roma",
  "UC Sampdoria",
  "Bologna FC",
  "ACF Fiorentina",
  "US Sassuolo Calcio",
  "Genoa CFC",
  "Hellas Verona FC",
  "Empoli",
  "Cagliari Calcio",
  "Spezia Calcio",
  "US Salernitana",
  "Venezia",
  "AC Monza",
  "US Cremonese",
  "Udinese Calcio",
  "SS Lazio",
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
  "Orlando City SC",
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
  "St Louis City SC",
  "Club America",
  "CD Guadalajara",
  "Tigres",
  "Cruz Azul",
  "CF Monterrey",
  "CF Pachuca",
  "Club Nexaca",
  "Atlas FC",
  "Club Universidad Nacional",
  "Pumas UNAM",
  "Deportivo Toluca FC",
  "Santos Laguna",
  "Club Leon",
  "Club Puebla",
  "FC Juarez",
  "Club Tijuana",
  "Mazatlan FC",
  "Queretaro FC",
  "Atletico de San Luis",
  "Atletico Mineiro",
  "Vasco da Gama",
  "Corinthians",
  "Gremio",
  "Santos FC",
  "Cruzeiro",
  "SC Internacional",
  "Palmeiras",
  "Flamengo",
  "Fluminense",
  "Botafogo",
  "Santos FC",
  "Sao Paulo",
  "Boca Juniors",
  "Estudiantes",
  "Newells Old Boys",
  "Independiente",
  "Racing Club",
  "River Plate"
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
let userAnswerInput = document.getElementById( "user-answer-input" );
let modal = document.querySelector( ".answer-modal" );
let close = document.querySelector( ".close" );
let guessSpot = document.getElementById( "answer-spot" );
let letterInput = document.getElementById( 'user-input' );
let answerButton = document.getElementById( 'answer-button' );



startGame = () => {
  guessesLeft;
  lettersGuessed = [];
  correctLetters = [];
  duplicate = [];
  document.getElementById("guesses-left").innerHTML = `You have ${guessesLeft} guesses left!`;
  document.getElementById("letters-guessed").innerHTML = `Letters Guessed: ${lettersGuessed} `;
  getTeam();
};

// 1. Get a team function

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

  underscores = underscores.map((el, index) => {
    if (getSpaces[index] === " ") {
      el = " ";
    }
    return el;
  } );
  
  // 3. Display underscores on page

  document.getElementById("answer-spot").innerHTML = underscores.join("");

  total = underscores.filter((el) => {
    if (el !== " ") {
      return el;
    }}).length;
};

// 4. Getting the user inputs and checking for a correct guess

getUserInput = () => {
  let modal = document.querySelector( ".answer-modal" );
  let close = document.querySelector( ".close" );
  close.addEventListener( "click", function () {
    modal.style.display = 'none';
  })
  document.getElementById("answer-button").addEventListener("click", function () {
      modal.style.display = "block";
  } );
  
  // 5. Guess complete answer modal user input

  document.getElementById("user-answer-input").addEventListener("keydown", function (e) {
       userAnswerInput.value;
      if (e.keyCode === 13) {
        e.preventDefault();
        userAnswerInput = userAnswerInput.value.toLowerCase();
        console.log( userAnswerInput );
        if (userAnswerInput !== choice.toLowerCase()) {
          alert("Wrong");
          modal.style.display = "none";
          guessesLeft -= 1;
          document.getElementById( "guesses-left" ).innerHTML = `You have ${guessesLeft} guesses left!`;
          userAnswerInput = document.getElementById( "user-answer-input" );
          letterInput.style.display = 'none';
        }
          letterInput.style.display = 'inline';

      }
      if (userAnswerInput === choice.toLowerCase()) {
        alert( "You Win" );
        document.getElementById( "guesses-left" ).innerHTML = `Great Job! Play again!`;
        modal.style.display = "none";
        document.getElementById( "answer-spot" ).innerHTML = choice;
        letterInput.style.display = 'none';
        answerButton.style.display = 'none';
      }
    });

  // 6. Get only letter input

  document.getElementById("user-input").addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        let userInput = document.getElementById( "user-input" ).value.toLowerCase();
        console.log( userInput )
        let regex = /[a-zA-Z]/;
        
        
        let upper = userInput.toUpperCase();
        let lower = userInput.toLowerCase();
        
        if(!userInput.match(regex)){
          alert('Pick a letter')
        }
        document.getElementById("user-input").value = "";

        if ( !lettersGuessed.includes( userInput ) &&
          !lettersGuessed.includes( userInput.toLowerCase() ) &&
          userInput.length < 2 &&
          userInput.match( regex ) ) {
          
          lettersGuessed.push( userInput );
          
          if ( !checkAnswer.includes( userInput ) ) {
            console.log( checkAnswer )
            guessesLeft -= 1;
            document.getElementById( "guesses-left" ).innerHTML = `You have ${guessesLeft} guesses left!`
          } else {
            guessesLeft = guessesLeft;
          }
        }else  if(userInput.match(regex)){
            alert("Letter already chosen")
          }
        
        if ( checkAnswer.includes( userInput ) ) {
          if ( !correctLetters.includes( userInput ) ) {
            correctLetters.push( userInput )  
          }   
        }
      
        // 7. Display letters that have been guessed

      document.getElementById("letters-guessed").innerHTML = `Letters Guessed: ${lettersGuessed}`;

        for (var i = 0; i < wordSplit.length; i++) {
          if (userInput === wordSplit[i] ||upper === wordSplit[i] ||lower === wordSplit[i]) {
            underscores[i] = wordSplit[i];
            guessSpot.innerHTML = underscores.join("");
          }
        }

        // 8. Lose game with no guesses remaining
        
        if ( guessesLeft === 0 ) {
          alert( "Game Over!" );
          document.getElementById( "answer-spot" ).innerHTML = choice;
          letterInput.style.display = 'none';
          
          // location.reload();
        }

        // 9. Winning the game

        if (underscores.join('') === choice) {
          alert( "You Win" );
          guessSpot.innerHTML = choice; 
          document.getElementById( "guesses-left" ).innerHTML = `Great Job! Play again!`;
          letterInput.style.display = 'none';
          answerButton.style.display = 'none';
          
        }
        guessesLeft = guessesLeft;
      }
    });
};

// 10. Check button on user answer input modal

checkButton = () => {
  let check = document.getElementById( "check" );
  check.addEventListener( "click", function () {
    if ( userAnswerInput.value.toLowerCase() === choice.toLowerCase() ) {
      alert('You win')
      modal.style.display = 'none';
      guessSpot.innerHTML = choice;
      letterInput.style.display = 'none';
       document.getElementById( "guesses-left" ).innerHTML = `Great Job! Play again!`;


    } else {
      alert( 'try again' );
      modal.style.display = 'none';
      userAnswerInput.value = "";
      guessesLeft -= 1;
      document.getElementById( "guesses-left" ).innerHTML = `You have ${guessesLeft} guesses left!`
      if ( guessesLeft === 0 ) {
      alert( 'you lose modal' );
      document.getElementById( "answer-spot" ).innerHTML = choice;
      letterInput.style.display = 'none';
      }
    }
  } )
}

// 11. Button for those who give up too easily

newGame = () => {
  document.getElementById("new-game").addEventListener("click", function () {
    location.reload();
  });
};

// FUNCTIONS 

startGame();
checkButton();
getUserInput();
newGame();

//TO DO

// 1. Record wins and losses (modal?)

// 2. Reset game instead of reload.


