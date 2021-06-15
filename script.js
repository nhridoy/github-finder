let search = document.querySelector(".search");
let inp = document.querySelector("#userName");
let btn = document.querySelector("#searchBtn");
let profile = document.querySelector(".profile");

let info = new Informations();
btn.addEventListener("click", (e) => {
  let userName = inp.value;
  
  // Fetch API
  if (userName != "") {
    Promise.all([
      fetch(`https://api.github.com/users/${userName}`).then(resp => resp.json()),
      fetch(`https://api.github.com/users/${userName}/repos`).then(resp => resp.json())
    ]).then((data) => {
        if (data[0].message == "Not Found") {
          info.notFound("User Not Found");
        } else {
          info.showInfo(data[0]);
          info.sliderRepo(data[0],data[1]);
        }
      });
  } else {
    info.clearProfile("Enter UserName!!!");
  }
  inp.value = '';
  e.preventDefault();
});
