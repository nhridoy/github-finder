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
        let full_name = data.name;
        let company = data.company;
        let blog = data.blog;
        let location = data.location;
        let email = data.email;
        let hireable = data.hireable;
        let bio = data.bio;
        let twitter_username = data.twitter_username;
        let public_repos = data.public_repos;
        let public_gists = data.public_gists;
        let followers = data.followers;
        let following = data.following;
        let created_at = data.created_at;
        let updated_at = data.updated_at;
        let login = data.login;
        let avatar_url = data.avatar_url;
        let html_url = data.html_url;
        let message = data.message;

        if (data.message == "Not Found") {
          let info = new Informations();

          info.notFound("User Not Found");
        } else {
          let info = new Informations(
            login,
            avatar_url,
            html_url,
            full_name,
            company,
            blog,
            location,
            email,
            hireable,
            bio,
            twitter_username,
            public_repos,
            public_gists,
            followers,
            following,
            created_at,
            updated_at
          );

          info.showInfo();
        }
      });
  } else {
    let info = new Informations();

    info.notFound("Enter UserName!!!");
  }
  e.preventDefault();
});
