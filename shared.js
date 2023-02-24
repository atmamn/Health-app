const date = () => {
	const present = new Date();
	// const month = present.getMonth() + 1;
	const day = present.getDate();
	const options =  {weekday: "long"};
	const options1 =  {month: "long"};
	const weekDay = present.toLocaleDateString("en-US", options)
	const month = present.toLocaleDateString("en-US", options1)
	return document.querySelector("#monthWeekday").textContent = `${month} ${day}, ${weekDay}`
};
console.log(date());

const getDayOfTheYear = (day) => {
	const present = new Date();
	const startOfYear = new Date(present.getFullYear(), 0, 0);
	const diff = present - startOfYear; // diff returns the diff btw the present time and startOfYear in miliseconds
	const oneDay = 1000 * 60 * 60 * 24; // oneDay converts that diff to 24 hours (each)
	return document.querySelector("#dayofyear").textContent = `Day ${Math.floor(diff / oneDay)} of 365 days` // to convert to one day each
};
console.log(getDayOfTheYear(new Date()));