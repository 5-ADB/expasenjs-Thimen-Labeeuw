/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes

//HTML
const LijstNamen = document.querySelector("#lijstNamen");

//local variable

//namen wissen
LijstNamen.innerHTML = "";
updateLijst();

//namen toeveogen in lijst
function updateLijst() {
  LijstNamen.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");
    const username = document.createElement("span");
    const email = document.createElement("span");
    username.className = "username";
    email.className = "email";
    username.innerHTML = user.fullname;
    email.innerHTML = user.email;
    if (checkDubbelUser(user.fullname) == true) {
      listItem.className = "dubbelUser";
    } else {
      listItem.className = "";
    }
    listItem.appendChild(username);
    listItem.appendChild(email);
    LijstNamen.appendChild(listItem);
  });
}

//dubbeluser
function checkDubbelUser(userName) {
  let i = 0;
  users.forEach((CurrentUser) => {
    if (CurrentUser.fullname == userName) {
      i++;
    }
  });
  console.log(i);
}

//registreren van nieuwe gebruiker
const RegisterButton = document.querySelector("#registreer");
const warningText = document.querySelector("#warningText");
const InputFieldName = document.querySelector("#name");
const InputFieldEmail = document.querySelector("#email");
const InputFieldPassword = document.querySelector("#password");

RegisterButton.addEventListener("click", addUser);

function addUser() {
  if (
    InputFieldName.value == "" ||
    InputFieldEmail.value == "" ||
    InputFieldPassword.value == ""
  ) {
    warningText.innerHTML = "een van de velden is niet ingevuld";
  } else {
    users.push({
      fullname: InputFieldName.value,
      email: InputFieldEmail.value,
      password: InputFieldPassword.value,
    });
    updateLijst();
  }
}

//filter
const filterBtn = document.querySelector("#filterBtn");
const InputFieldFilter = document.querySelector("#filter");
const FilterWarning = document.querySelector("#FilterWarning");

filterBtn.addEventListener("click", FilterName);

function FilterName() {
  if (InputFieldFilter.value.length < 4) {
    FilterWarning.innerHTML = "filter incorrect";
  } else {
  }
}
