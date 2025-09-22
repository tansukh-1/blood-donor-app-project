




function menuControler() {
  const menu = document.getElementById("menu");
  const crossIcon = document.getElementById("crossIcon");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const hamburger = document.getElementById("hamburger")
  console.log("cross icionon", crossIcon.style.display)
  if(crossIcon.style.display == "none") {
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "inline-block";
    hamburger.style.flexDirection = "row-reverse"
    
    menu.style.display = "flex";
    menu.classList.remove("slideOut");
    menu.classList.add("slideIn");
  }
  else {
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "inline-block";
       hamburger.style.flexDirection = "row";
     menu.classList.remove("slideIn");
    menu.classList.add("slideOut");
  }
}
const registration = document.getElementById("registration");
const formForDonor = document.getElementById("formForDonor");

function donorFormHandler(event) {
   event.preventDefault();
const formData = new FormData(formForDonor);
const donorData = Object.fromEntries(formData.entries());
const donorDataString = JSON.stringify(donorData);
localStorage.setItem("donorData", donorDataString);
console.log("form",donorData)
formForDonor.style.display = "none";
registration.innerHTML = '<div id="thankMsg"><h2>Thank You for Registering as a Blood Donor!</h2><p>We appreciate your willingness to help others in need. Your information has been successfully submitted.</p></div>';
window.scrollTo(0,0);
}



function verify () {
  let input = document.getElementById("aayu");
  let age = input.value;
  if (age == '') {
    let p = document.getElementById("vary")
    p.innerHTML = ":- Something Missing";
    return;
  }
 else if (age > 65) {
    let p = document.getElementById("vary")
    p.innerHTML = ":-Your Age is Above 65, So You Cannot Donate Blood.";
  }
 else if (age < 18) {
   let p = document.getElementById("vary")
    p.innerHTML = ":-You Are Under 18 Years of Age So You Cannot Donate Blood.";
  }
  else {
    let p = document.getElementById("vary")
    p.innerHTML = " ";
      let button = document.getElementById("bu");
    button.type = "submit";
  }
  
}
