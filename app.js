document.addEventListener("DOMContentLoaded", () => {
	const startButton = document.querySelector("#start");
	const hoursInput = document.querySelector("#hrs-val");
	const minutesInput = document.querySelector("#min-val");
  
	function updateStartButtonVisibility() {
	  const str_hr = hoursInput.value;
	  const str_min = minutesInput.value;
	  if (str_hr === "" && str_min === "") {
		startButton.style.display = "none";
	  } else {
		startButton.style.display = "block";
	  }
	}
  
	hoursInput.addEventListener("input", updateStartButtonVisibility);
	minutesInput.addEventListener("input", updateStartButtonVisibility);
  
	updateStartButtonVisibility();
});
  

// TIMER
document.querySelector("#start").addEventListener("click", function () {
	const activity = document.querySelector("#activity").value;
	const str_hr = document.querySelector("#hrs-val").value;
	const str_min = document.querySelector("#min-val").value;
  
	let hours = Number(str_hr);
	let minutes = Number(str_min);
  
	const targetTime = new Date();
	targetTime.setHours(targetTime.getHours() + hours);
	targetTime.setMinutes(targetTime.getMinutes() + minutes);
  
	let intervalId = setInterval(function () {
	  const currentTime = new Date();
	  let timeLeft = targetTime - currentTime;
  
	  if (timeLeft <= 0) {
		document.querySelector('#alarm').play();
		clearInterval(intervalId);
		alert(`The activity has ended, Gbemiga!`)
		/*document.querySelector("#activity-display").textContent = "Time's up!";*/
		document.querySelector("#time-display").textContent = "";
		location.reload();
	  } else {
		let hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
		let minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  
		if (hoursLeft > 0) {
		  document.querySelector("#time-display").textContent = `${hoursLeft} hours and ${minutesLeft} minutes left`;
		} else {
		  document.querySelector("#time-display").textContent = `${minutesLeft} minutes left`;
		}
  
		document.querySelector("#activity-display").textContent = `Active: ${activity}`;
	  }
	}, 1000);
  });
