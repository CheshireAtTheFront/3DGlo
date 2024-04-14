const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let message = '';
let messageTimeDay = 'Сегодня:';
let messageDayTheWeek = 'Текущее время:';

const daysLeftNewYear = () => { 
	const msPerDay = 24*60*60*1000;
	const nextDate = new Date("January 1, 2025");
	const daysLeft = Math.round((nextDate.getTime() - now.getTime()) / msPerDay);
	const numberOfDays = String(daysLeft);
	const message = 'До Нового года осталось';

	let dayName = "";
	let day = parseInt(numberOfDays.substring(numberOfDays.length - 1));

	if(daysLeft > 4 && daysLeft < 21) {
		dayName = "дней";
	} else if(day == 1) {
		dayName = "день";
	} else if(day == 2 || day == 3 || day == 4) {
		dayName = "дня";
	} else {
		dayName = "дней";
	}
	return `${message}: ${daysLeft} ${dayName}!`;
}

const timeOfDay = () => {
	if(hour >= 5 && hour < 12) {
		message = "Доброе утро"
	} else if(hour >= 12 && hour < 18) {
		message = "Добрый день";
	} else if(hour >= 18 && hour < 24) {
		message = "Добрый вечер";
	} else if(hour >= 0 && hour < 5) {
		message = "Доброй ночи"
	}

	minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  hour = (hour < 10) ? '0' + hour : hour;

	message += '\n' + `${messageTimeDay} ${days[now.getDay()]}\n${messageDayTheWeek} ${hour} : ${minutes} : ${seconds}\n${newYear}`;

	return message
}

let newYear = daysLeftNewYear();
let timeDay = timeOfDay();

console.log(message);