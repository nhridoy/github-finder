class Informations {
  constructor() {
    this.div = document.querySelector(".profile");
    this.break = document.querySelector(".break");
    this.err = document.createElement('div');
    this.slider = document.querySelector('.slider');
    this.slider_class = document.createElement('div');
    this.slider_div = document.createElement('div');
    this.demo_div = document.createElement('div');
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

  sliderRepo(data, slider){
    this.slider.innerHTML = "";
    this.slider_class.innerHTML = "";
    this.slider_div.innerHTML = "";
      
    this.slider_class.className = 'slider-class';
      for(let i in slider){
        this.slider_div.innerHTML = `
                <div class="card p-2 mx-3">
                    <strong>${slider[i].name}</strong>
                    <div class="text-center" style="display: grid; grid-template-columns: repeat(3, minmax(0,1fr));">
                        <a target="_blank" class="border border-1 border-primary" href="${slider[i].html_url}"><i class="bi bi-github"></i></a>
                        <a target="_blank" class="border border-1 border-primary" href="${slider[i].forks_url}">
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo-forked">
                                <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                        </a>
                        <a target="_blank" class="border border-1 border-primary" href="${slider[i].clone_url}">
                            <svg class="octicon octicon-terminal mr-3" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25H1.75zM7.25 8a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L5.44 8 3.72 6.28a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm1.5 1.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path></svg>
                        </a>
                    </div>
                </div>
        `
        this.slider_class.appendChild(this.slider_div.cloneNode(true));
      }
      this.slider.innerHTML = `
      <h2 class="text-center">${data.name}'s Public Repos</h2>
      `;
      this.slider.appendChild(this.slider_class);


      $(document).ready(function () {
        $('.slider-class').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 5,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });


    
  }

  clearProfile(message) {
    this.div.innerHTML = "";
    this.notFound(message);
  }
  notFound(message) {
    this.slider.innerHTML = "";
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
