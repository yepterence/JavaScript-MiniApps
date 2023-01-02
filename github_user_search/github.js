// class (ES6) for handling github requests
class GitHub {
    constructor() {
        this.clientId = '31905be7a949f8818479';
        this.clientSecret = 'b16cf830d94b093776a4beb4fe9e4c62d8032f27';
        this.repos_count = 5;
        this.latestRepos = 'created: asc';
    }
// async getUser method
    async getUser(user) {
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.latestRepos}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const resp_status = response.status;
        const profile = await response.json();
        const repos = await reposResponse.json();
        return {
            profile,
            status: resp_status,
            repos
        }
    }
}