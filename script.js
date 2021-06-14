let search = document.querySelector(".search");
let inp = document.querySelector("#userName");
let btn = document.querySelector("#searchBtn");
let profile = document.querySelector(".profile");

btn.addEventListener("click", (e) => {
  let userName = inp.value;

  // Fetch API
  if (userName != "") {
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          let info = new Informations();
          info.notFound("User Not Found");
        } else {
          let info = new Informations();
          info.showInfo(data);
        }
      });
  } else {
    let info = new Informations();
    info.clearProfile("Enter UserName!!!");
  }
  e.preventDefault();
});
