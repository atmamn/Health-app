// WALK
document.querySelector('#walk-btn').addEventListener('click', () => {
	let walkStart;
	let walkEnd;
	let walkIntervalId;
  
	const startWalk = () => {
		document.querySelector('#alarm1').play();
	  walkStart = new Date();
	  alert("It's time to walk, Gbemiga!");
	  walkEnd = new Date(walkStart.getTime() + 5 * 60000);
	  walkIntervalId = setInterval(walkFunc, 5 * 60000);
	}
  
	const walkFunc = () => {
		document.querySelector('#alarm1').pause();
	  let now = new Date();
	  if (now >= walkEnd) {
		clearInterval(walkIntervalId);
		alert("Stop exercising!");
		setTimeout(startWalk, 50 * 60000 - 5 * 60000);
	  }
	}
	startWalk();
  });