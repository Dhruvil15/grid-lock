/**
 * Name: Dhruvil Trivedi          
 * Banner ID: B00839059
 * Feature 1) All the CLICK ME button is developed by me in which, when the user clicks the button is hides the
              first button as well as the puzzle simultaneously.

 * Feature 2) Most of the styling of the webpage is done by me.

 * Experience learned: The experience gained by me from doing this assignment is, I got to know how projects
                        are developed and how to distibute the work and how to work as a team. And the most
                        important thing is I learned to work with JavaScript and understand how it works.
 */

/**
 * Name: Meet Kumar Patel         
 * Banner ID: B00857644
 * Feature 1 - The toggle button which switches between light and dark mode is created by me, the styling and java script code is written by me.

 * Feature 2 - The java script code for checking whether the buttons clicked by the user are in correct order or not is written by me. I created 
                a function which deals with checking the user input and the correct order of buttons

 * Experience learned - The experience gained by me include teamwork and I also learned a lot of things about javascript
                        I also learnt to be patient and supportive in a team and how to debug and find errors.
 */

/**
 * Name: Abdulrahman Mohammed Saif Al Kindi
 * Banner ID: B00858783
 * Features: Firstly, i created the content in three puzzles for the game and helped in designing the layout. 
            I created the hint box feature and the content inside it. 
            The features of href, javaScript were functioning then merged with my group member's java script functions and html code. 
            I worked on the showDiv function and some lines of the moveToNextGrid that switched between hints were made by me.
 
 * Experience learned : This experience allowed me to learn coordinating work with group members 
                        which displayed to me the importance of discipline in my work because
                        I have to insure that my work is done early so that my group members can adjust and merge our work together.
                        This furthermore developed my skills in working with a set of people to create one project.
 */

 /**
  * Name: Wenhui Zhao
  * Banner ID: B00779623
  * Features: I create a login window to welcome the user lonin and create game enter by user name. 
              I also create a button for start a new game, which related to others code

  * Experience learned : About my group members parts, I learn use all grid, JavaScript, 
                         function and any else other information work together to make a puzzle game successful.
  */

  /**
   * Name: Saahir Ahmed Monowar
   * Banner id: B00865737
   * Features:  - Grid functionality
                - Navigation between levels
	              I created the grids our puzzles were based on and the script logic
                that changed what level the player was on. Note: I did NOT work on what
                letters or words the grids contained, or the JavaScript that reacted to
                actions from the player.
   * 
   * Experience learned : The part of the experience that stood out during the project was
                          how hard it was for our team to divide our work based on "features"
                          implemented into the game. The term "features" felt ambigous, and wasn't
                          as specific as most of our other requirements. Our team had much less
                          trouble separating our work after considering what "roles" each member
                          could fulfil instead, and that is probably how I will approach
                          team projects in the future.
   */



//------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * It is worked upon by Meet and Abdulrahman collaberately. 
 * This is a function which is used to show the hints one after another
 * It takes in the hint Id as the parameter.
 * @param : hintId , hintId is the id of the hint box.
 * @returns : void
 */

// function to show the hidden hint text

function showThisDiv(hintId) {

  document.getElementById(hintArray[hintCount]).style.visibility = "visible";

    // This is to check whether the user is currently in dark or light mode.
    if(modeSwitchCounter === 1){

    document.getElementById(hintArray[hintCount]).style.color="white" 
    
  }

  else{

    document.getElementById(hintArray[hintCount]).style.color="black" 

  }

  hintCount ++ 
  
  // This loop is making all other arrays except for the one on which the user is currently at as invisible.
  for (var i = 0 ; i<hintCount-1 ; i++){

    document.getElementById(hintArray[i]).style.visibility="hidden"


  }

}

/**
 * Names: Dhruvil Trivedi (B00839059) and Saahir Monowar (B00865737)
 *
 * This is my second feature implemented collaboratively by me and Saahir, the CLICK ME button. This is the JavaScript file which mostly focuses on 
 * interction with the user. When the user clicks on CLICK ME button, the current puzzle disappears and the next one appears
 * (for all six puzzles), at the end when the user submits the puzzle, it shows an alert displaying the user has completed the puzzle.
 */

//This is the array for the puzzle ID's for the visibility part.
let gridIdArray = ['first-puzzle' , 'second-puzzle' , 'third-puzzle' , 'fourth-puzzle' , 'fifth-puzzle' , 'sixth-puzzle']

//This is the array for the CLICK ME button ID's for the visibility part.
let buttonArray = ['first-submit' , 'second-submit' , 'third-submit' , 'fourth-submit' , 'fifth-submit' , 'sixth-submit' , "sixth-submit"]

//count used to keep the count how many puzzle has been played by the user and which one to hide and 
//which one to make visible. Simarly goes for the CLICK ME button counter.
let count = 0 
let counter = 0 

/**
 * 
 * @param gridNumber
 * This is the function to hide the make puzzle visible according to the CLICK ME button. 
 */
function showGrid(gridNumber){
  //first the FIRST puzzle will be visible and all other will be hidden
  document.getElementById(gridIdArray[gridNumber]).style.visibility="visible"
 
  //count increases by 1
  count++
  //itreating a loop to set the visibility porperty of the puzzle to hidden when count increases
  for (var i = 0 ; i<count-1 ; i++){
    document.getElementById(gridIdArray[i]).style.visibility="hidden"
  }
   //calling the showButtons function so that button and the puzzle works simultaneously
  showButtons(gridNumber) 
  
}

/**
 * 
 * @param buttonNumber
 * This is the function to hide the make CLICK ME button visible.
 */
function showButtons(buttonNumber){

  //first the FIRST CLICK ME button will be visible and all other will be hidden 
  document.getElementById(buttonArray[buttonNumber]).style.visibility="visible"
 
  //counter increments by 1 
  counter++

  //iteration the loop so that when next time the user clicks the button, the CLICK ME button for the first puzzle
  //becomes hidden and the button the for the second puzzle is visible
  for (var i = 0 ; i<=counter-1 ; i++){

    //condition if the user is on the last puzzle then break the loop and exit 
    if(i === 6){
        break
    }
  
    //setting the button to hidden and visible according to the increment of the counter 
    document.getElementById(buttonArray[i]).style.visibility="hidden"
    document.getElementById(buttonArray[i+1]).style.visibility="visible"
  }
  
  //condition if the counter becomes equal to 7 then give a alert to the user that the game has been completed
  if(counter === 7){
    alert("you completed the game!!!! ")
  }
 
  // this code piece is used to make the hide the link when the next button is created.
  if (buttonNumber>0 && buttonNumber<4){

    document.getElementById(hintArray[buttonNumber-1]).style.visibility = "hidden"

  }

}

/**
 * Name: Meet Kumar Patel
 * Banner ID: B00857644
 * These are the global variables that I used for my two functions.
 */
let hintArray = ['p-hint1' , 'p-hint2', 'p-hint3']
let hintCount = 0 
let wordCounter = 0 
const MAX_COUNT = 10
var userInputArray = [] 
let modeSwitchCounter = 0 

/**
 * Name: Meet Kumar Patel
 * Banner ID: B00857644
 * This is the first feature created by me. It toggle button which switches between dark mode and light mode as the user clicks it alternately.
 * This function uses java script to interact with other HTML and CSS elements and helps the user to get an amazing experience of user interface.
 * This function basically changes the background color and text color of the body and the buttons used in the grid by using a global variable called 
 * "modeSwitchCounter" which keeps the track of the number of clicks done by user and if - else clauses.
 * @param:  void
 * @returns:  void
 */
function darkMode(){

  if(modeSwitchCounter===0)
  {
    // The dark mode
    document.body.style.backgroundColor="black" 

    let buttonCollection =document.getElementsByTagName("button")

    // This loop is used to set all buttons belonging to the tag "button" have their background and text color changed according to dark mode.
    for(let i = 0 ; i<buttonCollection.length ; i++){
      
      buttonCollection[i].style.color = "white" 
      
      buttonCollection[i].style.backgroundColor="black" 
    
    }

    document.getElementById("toggle-button").innerHTML = "Light Mode" 
    
    document.getElementById("toggle-button").style.backgroundColor = "white" 
    
    document.getElementById("toggle-button").style.color = "black" 
    
      
    modeSwitchCounter++ 
  }

  else{

    // The light mode
    document.body.style.backgroundColor="white" 
  
    let buttonCollection =document.getElementsByTagName("button") 
    
    // This loop is used to set all buttons belonging to the tag "button" have their background and text color changed according to white mode.
    for(let i = 0 ; i<buttonCollection.length ; i++){
      
      buttonCollection[i].style.color = "black" 
      
      buttonCollection[i].style.backgroundColor="#ADEFD1FF" 
        
    }

    document.body.style.backgroundColor=" #078282FF" 
  
    document.getElementById("toggle-button").innerHTML = "Dark Mode" 
      
    document.getElementById("toggle-button").style.backgroundColor = "black" 
      
    document.getElementById("toggle-button").style.color = "white" 
          
    modeSwitchCounter=0 
         
  }
    
}

/**
 * Name: Meet Kumar Patel
 * Banner ID: B00857644
 * This is the second feature created by me. It is a function which checks whether the elements selected by the user are correctly selected or not.
 * It basically uses a pre-defined array with correct order of ids and then compares it with the array which holds the user entered ids and compares 
 * them by converting both of these arrays into JSON objects via the function called stringfy. It keeps the track of whether the puzzle is over or not via 
 * a global counter called "wordCounter". It also makes sure that once the user has completed the maximum number of attempts , an alert is shown everything changes back to normal.
 * @param : buttonId , buttonId is the id of the button which the user clicks.
 * @returns :  void.
 */
function correctArray(buttonId){
  
  let checkArray_A = ['p1a5']
  let checkArray_KEYS = ['p2f3' , 'p2f4' , 'p2f5' , 'p2f6']
  let checkArray_AMAZON = ['p3h8' , 'p3g7' , 'p3f6' , 'p3e5' , 'p3d4' , 'p3c3']
  let checkArray_APPLE = ['p4b3' , 'p4b4' , 'p4b5' , 'p4b6' , 'p4b7']
  let checkArray_PANDA = ['p5h9', 'p5g9' , 'p5f9' , 'p5e9' ,'p5d9']
  let checkArray_STEAMSHIP = ['p6c9' , 'p6c8' , 'p6c7' , 'p6c6', 'p6c5' , 'p6c4' , 'p6c3' , 'p6c2' , 'p6c1']
 
  userInputArray.push(buttonId) 

  // This is to compare the userInputArray and the checkArray which has the answer to the puzzle by changing them into JSON objects for the word A
  if(JSON.stringify(userInputArray)===JSON.stringify(checkArray_A)) {

    alert("you found A") 
    
    userInputArray=[] 
    
    wordCounter++  

    console.log(counter)
  }

  // This is to compare the userInputArray and the checkArray which has the answer to the puzzle by changing them into JSON objects for the word KEYS
  if(JSON.stringify(userInputArray)===JSON.stringify(checkArray_KEYS)) {

    alert("you found KEYS")  
    
    userInputArray=[] 
    
    wordCounter++  
  }

  // This is to compare the userInputArray and the checkArray which has the answer to the puzzle by changing them into JSON objects for the word AMAZON
  if(JSON.stringify(userInputArray)===JSON.stringify(checkArray_AMAZON)) {

    alert("you found AMAZON!!")  
    
    userInputArray=[] 
    
    wordCounter++  
  }

  // This is to compare the userInputArray and the checkArray which has the answer to the puzzle by changing them into JSON objects for the word APPLE
  if(JSON.stringify(userInputArray)===JSON.stringify(checkArray_APPLE)) {

    alert("you found APPLE!!") 
      
    userInputArray=[] 
      
    wordCounter++  
  
  }

  // This is to compare the userInputArray and the checkArray which has the answer to the puzzle by changing them into JSON objects for the word PANDA
  if(JSON.stringify(userInputArray)===JSON.stringify(checkArray_PANDA)) {

    alert("you found PANDA!!")  
          
    userInputArray=[] 
          
    wordCounter++  
    
  }

  // This is to compare the userInputArray and the checkArray which has the answer to the puzzle by changing them into JSON objects for the word STEAMSHIP
  if(JSON.stringify(userInputArray)===JSON.stringify(checkArray_STEAMSHIP)) {

    alert("you found STEAMSHIP!!")  
      
    userInputArray=[] 
      
    wordCounter++  
  }
  
  if(wordCounter === 1){

    alert("you completed the puzzle. Scroll down and unlock the next level") 
    
    wordCounter=0;
     

  }

  // This condition is checked when the user has crossed the maximum number of tries and resets all the selections made by him.
  if(userInputArray.length > MAX_COUNT){

    for(let k = 0; k < userInputArray.length ; k++){
              
      var choosenButton = document.getElementById(userInputArray[k]) 
      
      if(modeSwitchCounter===1){

      choosenButton.style.backgroundColor = "#ADEFD1FF" 

      }

      choosenButton.style.backgroundColor = "black"
    }

    userInputArray = [] 

    alert("you exceeded the number of chances. Try again...") 
       
  }
      
}

/**
 * Name: Meet Kumar Patel
 * Banner ID: B00857644
 * This is a common function built by me which changes the color of the button and makes it light green whenever a user clicks on it.
 * @param : elementId  , The elementId is the id of the element which is using the functioning of the function.
 * @returns:  void
 */
function color(elementId){

  document.getElementById(elementId).style.backgroundColor = "lightgreen" 

  correctArray(elementId)   

}

   
/* Note: This is a function from Wenhui, meant to act as a welcome screen for the player
         We were unable to properly make it work (as soon as the page loads) because it 
         conflicted with our puzzle-changing code. We left it here to be graded


function  Wenhui() {​ 

   alert("Game login!");

   var n=prompt("What is your user name");
  
   while(n==null){​
    
     n=prompt("What is your user name");
    
   }​
    
   if(n==""){​
    
    document.write("<h1>Welcome!</h1>");
    
   }​
    
   else{​
    
     document.write("<h1>Welcome "+n+"!</h1>");
   
   }​

 }​

*/