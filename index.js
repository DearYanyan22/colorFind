

let level = 11 
let score = 0

const display = document.querySelector("#display")
const levelDisplay = document.querySelector("#level")
const start = document.querySelector("#start")
const squares = document.querySelectorAll('.square')
const resultdisplay = document.querySelector("#resultdisplay")
const resultdiv = document.querySelector(".result-div")
const imgdisplay = document.querySelector("#imgdisplay")

window.addEventListener("load",init())



function init() {

     randomColor()
     adjustSquare() 
	 compareColor()


}



//Randomly adjust one square's color

function adjustColor(level) {
    
	if(window.r > 255 - (level*3)){

		   window.ar = window.r - (level*3);}
		   else{
		    	window.ar = window.r + (level*3)}

		   if(window.g > 255 - (level*3)){

		   window.ag = window.r - (level*3);}
		   else{
		    	window.ag = window.g + (level*3)}


		   if(window.b > 255 - (level*3)){

		   window.ab = window.b - (level*3);}
		   else{
		    	window.ab = window.b + (level*3)}

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
				
			//for the check purpose: console.log(this.style.backgroundColor,  this.style.backgroundColor === window.targetColor)
			score++
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
	

	resultdiv.style.display = "block"

	display.innerHTML = "Game Over!"
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
		resultdisplay.innerHTML = "You must mis-clicked something! Play again!"
	}

	else if(score === 1){

		resultdisplay.innerHTML = "Hmmmm, wanna try again? "
		
	}

	else if(score === 2){

		resultdisplay.innerHTML = "Level 3 is not bad. Better than level 2 ~  "
		
	}

	else if(score === 3){

		resultdisplay.innerHTML = "Level 4 is not bad. Better than level 3 ~ "
		
	}

	else if(score === 4){

		resultdisplay.innerHTML = "Oh-oh, you only beat 30% people. "
		
	}

   else if(score === 5){

		resultdisplay.innerHTML = "You've beat 50% people!"
		
	}


   else if(score === 6){

		resultdisplay.innerHTML = "You've beat 60% people!"
		
	}


	 else if(score === 7){

		resultdisplay.innerHTML = "You are on the top of 80%! "
		
	}


	 else if(score === 8){

		resultdisplay.innerHTML = "You almost reached Yanyan's level!! "
		
	}

	 else if(score === 9){

		resultdisplay.innerHTML = "Congrats! You've reached the same level of Yanyan now!!  "
		
	}

	 else if(score === 10){

		resultdisplay.innerHTML = "Congrats!! You beat Yanyan!! But there is another higer level! Wanna try again?  "
		
	}
    

    else if(score === 11){

		resultdisplay.innerHTML = "Winner!! Your eyes' have extraordinary color sense!!!! "
		
	}




}


function playAgain(){
	
   location.reload()
}

