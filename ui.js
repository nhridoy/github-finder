class Informations {
  constructor() {
    this.div = document.querySelector(".profile");
    this.break = document.querySelector(".break");
    this.err = document.createElement('div');
  }

  showInfo(data) {
    this.div.innerHTML = `
        <div class="card">
                <div class="row p-3">
                    <div class="col-md-4 border border-3 border-primary p-3 mb-sm-3">
                        <img src="${data.avatar_url}" alt=""
                            class="img-fluid border border-3 border-primary mb-3">
                        <div class="row mb-3 p-3">
                            <div class="col-md-6 col-sm-6 border border-3 border-primary">
                                <i class="bi bi-people-fill"></i>
                                <span>Followers: <strong>${data.followers}</strong></span>
                            </div>
                            <div class="col-md-6 col-sm-6 border border-3 border-primary">
                                <i class="bi bi-people"></i>
                                <span>Following: <strong>${data.following}</strong></span>
                            </div>
                        </div>

                        <a href="${data.html_url}" target="_blank" class="d-grid btn btn-success border border-3 border-primary">View in Github</a>
                    </div>
                    <div class="col-md-8">
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Name: <strong>${data.name}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Location: <strong>${data.location}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Public Repos: <strong>${data.public_repos}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Public Gists: <strong>${data.public_gists}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Bio: <strong>${data.bio}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Email: <strong>${data.email}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Ready to Hire: <strong>${data.hireable}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Company: <strong>${data.company}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Twitter: <strong>${data.twitter_username}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Website: <strong>${data.blog}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Account Created: <strong>${data.created_at}</strong></p>
                        </div>
                        <div class="border border-3 border-primary d-flex align-items-center mb-1">
                            <p class="m-2">Last Activity: <strong>${data.updated_at}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  clearProfile(message) {
    this.div.innerHTML = "";
    this.notFound(message);
  }
  notFound(message) {
    this.div.innerHTML = "";
    this.err.innerHTML = `
    <div class = "d-grid d-flex align-items-center justify-content-center bg-danger p-2 link-light border border-3 border-primary">${message}</div>
    `;
    this.break.insertBefore(this.err, this.div);
    setTimeout(() => {
        this.err.remove();
    }, 3000);
  }
}
