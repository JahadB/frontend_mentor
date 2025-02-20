const imgUpload = document.getElementById("avatar");
const dropZone = document.querySelector(".dropZoneOverlay");
const form = document.getElementsByTagName("form")[0];
const submitBtn = document.getElementById("submitBtn");
const ticket = document.querySelector(".ticket");

imgUpload.addEventListener("change", Upload);

function Upload() {
    let imgURL = URL.createObjectURL(imgUpload.files[0]);
    dropZone.style.backgroundImage = `url(${imgURL})`;
    dropZone.textContent = "";
    dropZone.style.backgroundPosition = "center";
    dropZone.style.backgroundSize = "90px 90px";
    dropZone.style.backgroundRepeat = "no-repeat";
}

function getData(form) {
    var formData = new FormData(form);

    for (const [key, value] of formData) {
        comsole.log(value);    
    }
  
}
form.addEventListener("submit", generateTicket);

function generateTicket(event) {
    event.preventDefault();
    form.style.display = "none";
    ticket.style.display = "flex";
    getData(event.target);
}