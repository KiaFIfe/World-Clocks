function timeZone(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "sydney") {
      alert(`It is ${moment()
        .tz("Australia/Sydney")
        .format("dddd, MMMM, D, H:m A")}
 in Sydney`);
    }
    if (event.target.value === "paris") {
      alert(`It is ${moment().tz("Europe/Paris").format("dddd, MMMM, D, H:m A")}
 in Paris`);
    }
    if (event.target.value === "tokyo")
      alert(`It is ${moment().tz("Asia/Tokyo").format("dddd, MMMM, D, H:m A")}
 in Tokyo`);
  }
}

let sydneySelect = document.querySelector("#dropBox");
sydneySelect.addEventListener("change", timeZone);
