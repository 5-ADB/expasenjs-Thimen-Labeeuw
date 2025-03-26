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
    }
    listItem.appendChild(username);
    listItem.appendChild(email);
    LijstNamen.appendChild(listItem);
  });
}

//dubbeluser
function checkDubbelUser(userName) {
  let IsDubbel = false;
  users.forEach((user) => {
    if (user.fullname == userName) {
      IsDubbel = true;
    } else {
      IsDubbel = false;
    }
  });
  return IsDubbel;
}

//registreren van nieuwe gebruiker
