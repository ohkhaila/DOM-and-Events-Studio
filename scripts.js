// Write your JavaScript code here.
// Remember to pay attention to page loading!
  window.addEventListener('load', function () {
    //commands
      const takeoffButton = document.getElementById("takeoff");
      const landingButton = document.getElementById("landing"); 
      const abortButton = document.getElementById("missionAbort");
      //rocket status 
      const flightStatus = document.getElementById("flightStatus");
      const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
      const shuttleBackground = document.getElementById("shuttleBackground");
    //rocket direction buttons
      const rocket = document.getElementById("rocket");
      const upButton = document.getElementById("upButton");
      const downButton = document.getElementById("downButton");
      const rightButton = document.getElementById("rightButton");
      const leftButton = document.getElementById("leftButton"); 

  //2
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
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    }
   //5
      upButton.onclick = function(){
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
      }
      downButton.onclick = function(){
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
      }
      leftButton.addEventListener('click', function(){
        rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
      });
      rightButton.addEventListener('click', function(){
        rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
      });
 

  });  

  // object.onclick = function(){myScript};