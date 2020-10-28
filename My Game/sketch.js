/* GAME STRUCTURE:
- Have a predetermined list of words
- Pick a random word from the list
- The user guesses letters and tries to guess the word
- Check that the letters are valid
- Keep track of all letters already guessed
- Show letters guessed correctly with progress
- Finish when player guesses word or runs out of guesses.
- For every wrong guess Start drawing Hangman. 
- Person is allowed four wrong guess: for first, draw head, second draw body, third hand, fourth legs.
- Display message, Man Hanged, You Loose. */



//Global Variables

 // Array that contains all the possible words to be guessed.
 var wordtobeguessed =[century,decrease,except,grandfather,restaurant,aberration,circumvent,commemorate,
  harassment,promulgate,pronunciation,handkerchief,pharaoh,chiaroscurist,logorrhea];
 
  // Empty variable to store the current word to be guessed as a string.
	var currentword = "";
	// Empty variable to hold the actual letters in the current Word
	var currentwordletters = [];
	// Variable that holds the number of blanks "_" in the current 'Word
	var numblanks = 0;
	// Empty array to store the answer as it displays for the user
	var answerdisplay = [];
	// Empty array to hold all the wrong guesses, and display to userGuess
	var wrongltrs = [];

	//Game Stats
	var wins = 0;
	var losses = 0;
	var guessesLeft = 5;
  

function setup(){
  createCanvas(displayWidth,displayHeight-150); 
    
}

function draw(){
  background(14, 234, 219); 

  // Displaying the title of game on Top
  textSize(32);
  fill('green');
  text("WORDS PLAY-ELSE GET HANGED", displayWidth-1000, displayHeight/8);
  
  // Displaying Rules on Top to play game
  textSize(20);
  fill('green');
  text("RULES: ",30,160);
  text("1) YOU GET 4 CHANCES TO GUESS THE WORD",30,200);
  text("2) EACH LIFE IS IMPORTANT",30,240 );
  text("3) YOU WILL HAVE TO GUESS THE LETTERS MISSING",30,280);
  text("4) IF YOU CANT GUESS THE WORD THE ANSWER WILL DISPLAY",30,320);
  text("5) ALL THE BEST AND HAVE FUN!!!!!",30,360);
  
    drawSprites();
}   

// Function to start new game
function newgame(){

  // Select a random word from list in array
currentword=wordtobeguessed[Math.floor(Math.random() * wordtobeguessed.length)];
console.log("The Word Choosen is: "+currentword);

//Break the words into individual letters
currentwordletters=currentword.split("");
console.log("Current word letters are"+currentwordletters);

//Get the number of letters in the word
numblanks=currentwordletters.length;
console.log("Number of blanks in the word are"+numblanks);

//Reset all values and clear screen
guessesleft=5
wrongltrs=[];
answerdisplay=[];

//Reset the Hangman drawing


//Add the correct number of blanks


//Display the current information


//Checking wheter the pressed letter is correct or not

}