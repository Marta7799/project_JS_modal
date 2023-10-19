const singingUp = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

singingUp.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements.name.value;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (name === "" || login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(
    `Name: ${name.value}, Login: ${login.value}, Password: ${password.value}`
  );
  form.reset();
}

// function getInfo() {
//   name.value;
//   email.value;
//     password.value;

//     for ( let i = 0, i < )
// }
