const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
// Get the label's names as i would be using them

const firstParagraph = document.querySelector(".firstP");
const secondParagraph = document.querySelector(".secondP");
const thirdParagraph = document.querySelector(".thirdP");
const fourthParagraph = document.querySelector(".fourthP");
const eyeHide = document.querySelector(".eyeHide");

const holdingPlace = document.querySelector("[placholder]");

console.log(firstName);

function showAlways() {
  if (eyeHide.src.endsWith("eye-password-hide.svg")) {
    eyeHide.src = "./images/eye-outline.svg";
    password.type ="text"
  } else if (eyeHide.src.endsWith("eye-outline.svg")) {
    eyeHide.src = "./images/eye-password-hide.svg";
    password.type ="password"
  }
}
// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    firstParagraph.style.display = "block";
    jill[0].style.display = "block";
  } else {
    firstName.classList.remove("error");
    firstParagraph.style.display = "none";
    jill[0].style.display = "none";
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    secondParagraph.style.display = "block";
    jill[1].style.display = "block";
  } else {
    lastName.classList.remove("error");
    secondParagraph.style.display = "none";
    jill[1].style.display = "none";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    thirdParagraph.style.display = "block";
    email.style.color = "var(--red)";
    jill[2].style.display = "block";
  } else {
    email.classList.remove("error");
    thirdParagraph.style.display = "none";
    email.style.color = "var(--black)";
    jill[2].style.display = "none";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    fourthParagraph.style.display = "block";
    jill[3].style.display = "block";
  } else {
    password.classList.remove("error");
    fourthParagraph.style.display = "none";
    jill[3].style.display = "none";
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
("");
