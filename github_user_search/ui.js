class UI {
    constructor() {
        this.profile = document.getElementById('profile');

    }

    // Display profile in UI
    showProfile(user){
        // Insert user into profile object using card format.
        // Border padding and drop shadows provided by default using card
        // grid system req row class
        // followed by a 3-column div 
        // img-fluid class makes the image fill 100% of container
        // div with id repos for adding data to it later on
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary mb-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary mb-2">Followers: ${user.followers}</span>
                        <span class="badge badge-primary mb-2">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item mb-2">Company: ${user.company}</li>
                            <li class="list-group-item mb-2">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item mb-2">Location: ${user.location}</li>
                            <li class="list-group-item mb-2">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    // Clear profile in UI
    clearProfile() {
        this.profile.innerHTML = '';
    };

    // Alert banner 
    showAlert(message, className) {
        // Clear previous alerts; necessary to prevent spamming of alert banners.
        this.clearAlert();

        // create div element
        const div = document.createElement('div');
        // Add classes
        div.className = `${className} text-center`;
        // Add text to within the element.
        div.appendChild(document.createTextNode(message));
        // Select parent
        const container = document.querySelector('.searchContainer');
        // Select search box 
        const searchBox = document.querySelector('.search');
        // Insert alert to be above search box
        container.insertBefore(div, searchBox);
        
        // Timeout after 3s
        // Necessary as the banner that previously existed will not be removed after a valid search is performed. 
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    // Display repos ; takes in array of repos as input
    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        })

        // output repos
        document.getElementById('repos').innerHTML = output;
    }
    // Remove alert banner 
    clearAlert() {
        const alertBanner = document.querySelector('.alert');
        if (alertBanner){
            alertBanner.remove();
        }
    }
}
