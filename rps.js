var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;
var computerChoice;
var playerChoice;

function init(){
	imgPlayer = $("#imgPlayer");
	btnRock = $("#btnRock");
	btnPaper = $("#btnPaper");
	btnScissors = $("#btnScissors");
	btnGo = document.getElementById('btnGo');
	deselectedAll();
}
function deselectedAll(){
	$("#btnRock").css("background-color",'silver');
	$("#btnScissors").css("background-color",'silver');
	$("#btnPaper").css("background-color",'silver'); 
}

function select(choice){
	playerChoice =  choice;
	imgPlayer.src = 'images/' + choice + '.png';
	deselectedAll();
	if(choice == 'rock') $("#btnRock").css("background-color",'#888888');
	if(choice == 'scissors') $("#btnScissors").css("background-color",'#888888');
	if(choice == 'paper')$("#btnPaper").css("background-color",'#888888'); 
	
	btnGo.style.display = 'block';	
}	
function go(){
	var txtEndTitle = document.getElementById('txtEndTitle');
	var txtEndMessage = document.getElementById('txtEndMessage');
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = document.getElementById('imgComputer');
	
	$("#lblRock").css("background-color",'#EEEEEE'); 
	$("#lblPaper").css("background-color",'#EEEEEE'); 
	$("#lblScissors").css("background-color",'#EEEEEE'); 
	
	if(numChoice==0){
		computerChoice = 'rock';
		imgComputer.src = 'images/rock.png';
		$("#lblRock").css("background-color",'yellow'); 
	
		if(playerChoice=='rock'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
		else if(playerChoice=='paper'){
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice=='scissors'){
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
	}
	else if(numChoice==1){
		computerChoice = 'paper';
		imgComputer.src = 'images/paper.png';
		$("#lblPaper").css("background-color",'yellow'); 
	
		if(playerChoice=='rock'){
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice=='paper'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
		else if(playerChoice=='scissors'){
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
	} 
	else if(numChoice==2){
		computerChoice = 'scissors';
		imgComputer.src = 'images/scissors.png';
		$("#lblScissors").css("background-color",'yellow'); 
		if(playerChoice=='rock'){
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice=='paper'){
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice=='scissors'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
	}
	document.getElementById('endScreen').style.display = 'block';
}
function startGame(){
	document.getElementById('introScreen').style.display = 'none';
}
function replay(){
	location.reload();
}
/*function replay() {
	document.getElementById('endScreen').style.display = 'none';
	btnGo.style.display = 'none';
	
	deselectedAll();
	document.getElementById('lblRock').style.backgroundColor = '#EEEEEE';
	document.getElementById('lblPaper').style.backgroundColor = '#EEEEEE';
	document.getElementById('lblScissors').style.backgroundColor = '#EEEEEE';
	
	imgPlayer.src = 'images/question.png';
	document.getElementById('imgComputer').src = 'images/question.png';
}*/