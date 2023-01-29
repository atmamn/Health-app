// TIMER
document.querySelector('#start').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const activityName = document.querySelector('#activity-name').textContent = name;
    let duration = document.querySelector('#duration').value;
    const activityDuration = document.querySelector('#activity-duration');
	activityDuration.textContent = duration;
    function myFunc() {
		
		if (duration > 0) {
			duration--;
			activityDuration.textContent = duration;
		} 
		else if (duration <= 0) {
			document.querySelector('#alarm').play();
			clearInterval(intervalId);
			alert("Timer has ended Gbemiga!");
			location.reload();
		}
    }
    let intervalId = setInterval(myFunc, 60000);
});


  
