function timeZone() {
  let dateS = document.querySelector("#dateSydney");
  let timeS = document.querySelector("#timeSydney");
  dateS.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
  timeS.innerHTML = `${moment()
    .tz("Australia/Sydney")
    .format(" HH:mm:ss")} <small class="am-pm">${moment()
    .tz("Australia/Sydney")
    .format("A")}`;

  let dateP = document.querySelector("#dateParis");
  let timeP = document.querySelector("#timeParis");
  dateP.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
  timeP.innerHTML = `${moment()
    .tz("Europe/Paris")
    .format("HH:mm:ss")} <small class="am-pm">${moment()
    .tz("Europe/Paris")
    .format("A")}`;

  let dateT = document.querySelector("#dateTokyo");
  let timeT = document.querySelector("#timeTokyo");
  dateT.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  timeT.innerHTML = `${moment()
    .tz("Asia/Tokyo")
    .format("HH:MM:ss")} <small class="am-pm">${moment()
    .tz("Asia/Tokyo")
    .format("A")}`;

  let dateLa = document.querySelector("#dateLa");
  let timeLa = document.querySelector("#timeLa");
  dateLa.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
  timeLa.innerHTML = `${moment()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss")} <small class="am-pm">${moment()
    .tz("America/Los_Angeles")
    .format("A")}`;
}

function locationTimeZone(event) {
  let selectTimeZoneElement = document.querySelector("#box");
  let changeTimeZone = event.target.value;
  let changeName = changeTimeZone.replace("_", " ").split("/")[1];
  let locationdata = moment().tz(changeTimeZone);
  selectTimeZoneElement.innerHTML = `
  <div class="city-box">
  <div class="left">
  <h2 class="name">${changeName}</h2>
  <div class="month">${locationdata.format("MMM Do YYYY")}</div>
  </div>
  <div class="time"> ${locationdata.format("HH:MM:ss")}
  <small class="am-pm">${locationdata.format("A")}</small>
  </div>
  </div>
  </div>`;
}

let tzSelect = document.querySelector("#dropBox");
tzSelect.addEventListener("change", locationTimeZone);
let box = document.querySelector("#box");

setInterval(timeZone, 1000);
setInterval(locationTimeZone, 1000)