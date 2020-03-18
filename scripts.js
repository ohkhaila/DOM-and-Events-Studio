// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {
  

//commands
  const takeoffButton = document.getElementById("takeoff");
  const landingButton = document.getElementById("landing"); 
  const abortButton = document.getElementById("missionAbort");
    
  //rocket 

  //const rocket = 
  const flightStatus = document.getElementById("flightStatus");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  const shuttleBackground = document.getElementById("shuttleBackground");
  //direction buttons
  // const upButton = 
  // const downButton = 
  // const rightButton = 
  // const leftButton = 


    takeoffButton.onclick = function(){
      let confirmReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

      if (confirmReady) {
          flightStatus.innerHTML = "Shuttle in flight";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = "10000";
      }
    }

  //3
  landingButton.addEventListener('click', function(){
    let confirmLanding = window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = "0";
});

  //4
  abortButton.onclick = function(){
    let confirmAbort = window.confirm("Confirm that you want to abort the mission.");

    if (confirmAbort) {
        let changeFlightStatus = document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        let changeBackgroundColor = document.getElementById("shuttleBackground").style.backgroundColor = "green";
        let changeHeight = document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
}


});  

 // object.onclick = function(){myScript};