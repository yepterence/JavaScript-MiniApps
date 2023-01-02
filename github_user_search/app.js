
// Instantiate github api class 
const github = new GitHub;
// Instantiate ui class 
const ui = new UI;
// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup',(e) => {
    // Get text being typed into input
    const userInput = e.target.value;
    if (userInput){
        // Make http call to GitHubAPI
        github.getUser(userInput)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    
                    // Show Alert
                    console.log("Profile not found");
                    ui.showAlert('User not found', 'alert alert-danger');
                    
                    // clear profile
                    ui.clearProfile();
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})