class Users {
  constructor(login, avatar_url, html_url) {
    this.login = login;
    this.avatar_url = avatar_url;
    this.html_url = html_url;
  }
}

class Informations extends Users {
  constructor(
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
  ) {
    super(login, avatar_url, html_url);

    this.full_name = full_name;
    this.company = company;
    this.blog = blog;
    this.location = location;
    this.email = email;
    this.hireable = hireable;
    this.bio = bio;
    this.twitter_username = twitter_username;
    this.public_repos = public_repos;
    this.public_gists = public_gists;
    this.followers = followers;
    this.following = following;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  showInfo() {
    let div = document.querySelector(".profile");
    div.innerHTML = `
        <div class="card">
                <div class="row p-3">
                    <div class="col-md-4 border border-3 border-primary p-3 mb-sm-3">
                        <img src="${this.avatar_url}" alt=""
                            class="img-fluid border border-3 border-primary mb-3">
                        <div class="row mb-3 p-3">
                            <div class="col-md-6 col-sm-6 border border-3 border-primary">
                                <i class="bi bi-people-fill"></i>
                                <span>Followers: <strong>${this.followers}</strong></span>
                            </div>
                            <div class="col-md-6 col-sm-6 border border-3 border-primary">
                                <i class="bi bi-people"></i>
                                <span>Following: <strong>${this.following}</strong></span>
                            </div>
                        </div>

                        <a href="${this.html_url}" target="_blank" class="d-grid btn btn-success border border-3 border-primary">View in Github</a>
                    </div>
                    <div class="col-md-8">
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Name: <strong>${this.full_name}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Location: <strong>${this.location}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Public Repos: <strong>${this.public_repos}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Public Gists: <strong>${this.public_gists}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Bio: <strong>${this.bio}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Email: <strong>${this.email}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Ready to Hire: <strong>${this.hireable}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Company: <strong>${this.company}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Twitter: <strong>${this.twitter_username}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Website: <strong>${this.blog}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Account Created: <strong>${this.created_at}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Last Activity: <strong>${this.updated_at}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  notFound(message) {
    let div = document.querySelector(".profile");
    div.innerHTML = `
        <div class = "d-grid d-flex align-items-center justify-content-center bg-danger p-2 link-light border border-3 border-primary">${message}</div>
        `;
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
