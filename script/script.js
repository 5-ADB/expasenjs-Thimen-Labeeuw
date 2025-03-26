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
updateLijst(users);

//namen toeveogen in lijst
function updateLijst(Lijst) {
  LijstNamen.innerHTML = "";
  Lijst.forEach((user) => {
    const listItem = document.createElement("li");
    const username = document.createElement("span");
    const email = document.createElement("span");
    const Deletebtn = document.createElement("button");
    Deletebtn.innerHTML = "DEL";
    Deletebtn.addEventListener("click", DeleteUser);
    Deletebtn.className = user.fullname;
    username.className = "username";
    email.className = "email";
    username.innerHTML = user.fullname;
    email.innerHTML = user.email;
    if (checkDubbelUser(user.fullname) >= 2) {
      listItem.className = "dubbelUser";
    } else {
      listItem.className = "";
    }
    listItem.appendChild(username);
    listItem.appendChild(email);
    listItem.appendChild(Deletebtn);
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
  return i;
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
    updateLijst(users);
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
    let gefilterdeUsers = users;
    for (let i = 0; i < InputFieldFilter.value.length; i++) {
      gefilterdeUsers = gefilterdeUsers.filter(
        (user) => user.fullname[i] == InputFieldFilter.value[i]
      );
    }
    updateLijst(gefilterdeUsers);
  }
}

//delete user
function DeleteUser() {}
