//require letter object from letter.js export
var letter = require("./letter.js");

var Word = function(wrd){
	this.word = wrd;
	this.lets = [];
	this.found = false;
	this.getLets = function(word){
		for (var i = 0; i < this.word.length; i++) {
			this.lets.push(new letter.Letter(this.word[i]));
		}
	};
	
	this.didWeFindWord = function(){
		var count = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].appear){
				count++;
			}
		}
		if (count === this.lets.length){
			this.found = true;
		}
		return this.found;
	};
	
	this.checkIfLetterFound = function(guessLetter){
		var whatToReturn = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if(this.lets[i].charac === guessLetter){
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};

	this.wordRender = function(){
		var str = "";
		for (var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		}
		return str;
	};

};

exports.Word = Word;

//----------------------------------------------------------//
/*
//require letter object from letter.js export
var letter = require("./letter.js");

//underscores at start of game
let underscore = 0;

//Word function that 
class Word{
	constructor(word){
		var that = this;
		this.word = word;
		this.letters = [];
		this.wordFound = false;
	}
	// 1. split the word, save the letters in the letter array
	//split the word into individual letters and push to letters array
	getLetters(){
		for (var i = 0; i < that.word.length; i++) {
			let newLetter = new Letter(that.word[i]);
			this.letters.push(newLetter);
			//console log the underscores in the same line
			let underscore = ' _ ';
		}
		console.log(underscore);
	}

	// 2. check if the letter is in the letter array of the word
	isLetterFound(){
		let found = false;
		this.letters.forEach(function(ltr){
			if(ltr.letter === guessedLetter){
				ltr.appear = true;
				found = true;
			}
		})
		return found;
	}

	// 3. if ALL letters are in the letter array of the word
	isWordFound(){
		if(this.letters.every(function(ltr){
			return lttr.appear === true;
		})){
			this.wordFound = true;
			return true;
		}
	}

	wordRender(){
		let display = '';
		that.letters.forEach(function(ltr){
			let currentLetter = ltr.letterRender();
			display += currentLetter;
		})
		return display;
	}	

};

module.exports = Word; 
*/
