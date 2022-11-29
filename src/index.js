let dateS = document.querySelector("#dateSydney");
let timeS = document.querySelector("#timeSydney");
let amPmS = document.querySelector("#amPmS");
dateS.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
timeS.innerHTML = `${moment()
  .tz("Australia/Sydney")
  .format(" HH:mm:SS")} <small class="am-pm">${moment()
  .tz("Australia/Sydney")
  .format("A")}`;

// let tzSelect = document.querySelector("#dropBox");
// tzSelect.addEventListener("change", timeZone);
let dateP = document.querySelector("#dateParis");
let timeP = document.querySelector("#timeParis");
let amPmP = document.querySelector("#amPmP");
dateP.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
timeP.innerHTML = `${moment()
  .tz("Europe/Paris")
  .format("HH:MM:SS")} <small class="am-pm">${moment()
  .tz("Europe/Paris")
  .format("A")}`;

let dateT = document.querySelector("#dateTokyo");
let timeT = document.querySelector("#timeTokyo");
let amPmT = document.querySelector("#amPmT");
dateT.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
timeT.innerHTML = `${moment()
  .tz("Asia/Tokyo")
  .format("HH:MM:SS")} <small class="am-pm">${moment()
  .tz("Asia/Tokyo")
  .format("A")}`;

let dateLa = document.querySelector("#dateLa");
let timeLa = document.querySelector("#timeLa");
let amPmL = document.querySelector("#amPmL");
dateLa.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
timeLa.innerHTML = `${moment()
  .tz("Asia/Tokyo")
  .format("HH:MM:SS")} <small class="am-pm">${moment()
  .tz("Asia/Tokyo")
  .format("A")}`;
