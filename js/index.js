

let level = 11 
let score = 0
let scoreshow = 0
var step 
var display = document.querySelector("#display")
var levelDisplay = document.querySelector("#level")
var start = document.querySelector("#start")
var begindisplay = document.querySelector("#begindisplay")
var squares = document.querySelectorAll('.square')
var modes = document.querySelectorAll('.mode')
var resultdisplay = document.querySelector("#resultdisplay")
var scoredisplay = document.querySelector("#scoreDisplay")
var resultdiv = document.querySelector(".result-div")
var voice1 = document.createElement("audio");
var voice2 = document.createElement("audio");
var voice3 = document.createElement("audio");
var voice4 = document.createElement("audio");
  voice1.src = "asset/game.m4a";
  voice2.src = "asset/win.m4a";
  voice3.src = "asset/beginwin.m4a";
  voice4.src = "asset/finalwin.m4a";


//window.addEventListener("load",init())

for(var i = 0; i < modes.length; i++) {

	    modes[i].addEventListener("click", function() {

		display.innerHTML = "Ready? Go!"
		begindisplay.style.display = "none"
		modes[0].classList.remove("modeClicked");
		
		modes[1].classList.remove("modeClicked");
		modes[2].classList.remove("modeClicked");
		modes[0].disabled = true
		modes[1].disabled = true
		modes[2].disabled = true
		this.classList.add("modeClicked");
		this.disabled = false
		if(this.textContent === "Heaven Mode"){
			
			var step = 10
			
			window.step = step 
			init() ;

		} else if(this.textContent === "Normal Mode"){
		
			var step = 2
			window.step = step 
			
			init() ;

		}else{
			
			var step = 1
			window.step = step 
			
			init() ;

		}
		//this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
		
	});
}




function init() {
	


     randomColor()
     adjustSquare() 
	 compareColor()


}



//Randomly adjust one square's color

function adjustColor(level) {
    
	if(window.r > 255 - (level * window.step)){

		   window.ar = window.r - (level * window.step);}
		   else{
		    	window.ar = window.r + (level * window.step)}

		   if(window.g > 255 - (level * window.step)){

		   window.ag = window.r - (level * window.step);}
		   else{
		    	window.ag = window.g + (level * window.step)}


		   if(window.b > 255 - (level * window.step)){

		   window.ab = window.b - (level * window.step);}
		   else{
		    	window.ab = window.b + (level * window.step)}

		 return "rgb(" + window.ar + ", " + window.ag + ", " + window.ab + ")";		
           
}



function adjustSquare() {
	if(level !==0 ){
		 var r = Math.floor(Math.random() * squares.length);
           squares[r].style.backgroundColor = adjustColor(level);
           window.targetColor = squares[r].style.backgroundColor
           //for the check purpose: console.log(window.targetColor)
           return window.targetColor
       }else{
       	endGame()
       }


}



function compareColor(){

	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click",function(){
			
			if(this.style.backgroundColor === window.targetColor){
			voice1.play()
				
			//for the check purpose: console.log(this.style.backgroundColor,  this.style.backgroundColor === window.targetColor)
			score++
			scoreshow = scoreshow + 5
			
			scoredisplay.innerHTML = scoreshow
			reset()
				

			}else{endGame()}
			
		
			} )
			
		

	}
           



}




function randomColor() {
	levelDisplay.innerHTML =  score +1
   
    var r = Math.floor(Math.random() * 256);
    window.r = r
 
    var g = Math.floor(Math.random() * 256);
    window.g = g
   
    var b = Math.floor(Math.random() * 256);
    window.b = b
    originColor =  "rgb(" + r + ", " + g + ", " + b + ")";
    for (var i = 0; i < squares.length; i++){
    	squares[i].style.backgroundColor = originColor
    }
    
 
    //for check purpose: console.log(originColor)	

	

    return originColor
        


}




function endGame(){

	for (var i = 0; i < squares.length; i++){
    	squares[i].style.display = "none"
    }
	
	for (var i = 0; i < modes.length; i++){
    	modes[i].disabled = true
    }
	

	resultdiv.style.display = "block"

	display.innerHTML = " "
	result()

}

//Codes need to be changed in the future. Can we merge this with init() function?
function reset(){
	display.innerHTML = "Good Job!"
	level--
	randomColor()
	adjustSquare() 

}

//Codes need to be adjusted in the future. Can use object?


function result(){

	if(score === 0 ){
		voice3.play()
		resultdisplay.innerHTML = "You must mis-clicked something! Play again!"
	}

	else if(score === 1){
		voice3.play()

		resultdisplay.innerHTML = "Hmmmm, wanna try again? "
		
	}

	else if(score === 2){
			voice3.play()

		resultdisplay.innerHTML = "Level 3 is not bad. Better than level 2 ~  "
		
	}

	else if(score === 3){
		voice3.play()

		resultdisplay.innerHTML = "Level 4 is not bad. Better than level 3 ~ "
		
	}

	else if(score === 4){
			voice2.play()

		resultdisplay.innerHTML = "Oh-oh, you only beat 30% people. "
		
	}

   else if(score === 5){
   		voice2.play()

		resultdisplay.innerHTML = "You've beat 50% people!"
		
	}


   else if(score === 6){
   		voice2.play()

		resultdisplay.innerHTML = "You've beat 60% people!"
		
	}


	 else if(score === 7){
	 		voice2.play()

		resultdisplay.innerHTML = "You are on the top of 80%! "
		
	}


	 else if(score === 8){
	 		voice2.play()

		resultdisplay.innerHTML = "You almost reached Yanyan's level!! "
		
	}

	 else if(score === 9){
	 		   voice4.play()

		resultdisplay.innerHTML = "Congrats! You've reached the same level of Yanyan now!!  "
		
	}

	 else if(score === 10){
	 		voice4.play()

		resultdisplay.innerHTML = "Congrats!! You beat Yanyan!! But there is another higer level! Wanna try again?  "
		
	}
    

    else if(score === 11){
         voice4.play()

		resultdisplay.innerHTML = "Winner!! Your eyes' have extraordinary color sense!!!! "
		
	}




}


function playAgain(){
	
   location.reload()
}

