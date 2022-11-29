function timeZone(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "los-angeles") {
      let timeL = document.querySelector("#timeLa");
      timeL.innerHTML = moment().tz("America/Los_Angeles").format(" H:m:s ");
    }
  }
}

let tzSelect = document.querySelector("#dropBox");
tzSelect.addEventListener("change", timeZone);

setInterval("timeZone()", 1000);
