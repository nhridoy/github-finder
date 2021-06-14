let search = document.querySelector(".search");
let inp = document.querySelector("#userName");
let btn = document.querySelector("#searchBtn");
let profile = document.querySelector(".profile");

let info = new Informations();
btn.addEventListener("click", (e) => {
  let userName = inp.value;

  // Fetch API
  if (userName != "") {
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          info.notFound("User Not Found");
        } else {
          info.showInfo(data);
        }
      });
  } else {
    info.clearProfile("Enter UserName!!!");
  }
  inp.value = '';
  e.preventDefault();
});
