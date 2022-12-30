document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getExternalResponse);

// function getText() {
//     // get text file from local directory using FetchAPI
//     fetch('test.txt')
//         .then(function(res){
//             // return text method in Promise prototype
//             return res.text();
//         })
//         .then(function(data){
//             // print out data within promise object
//             console.log(data);
//             document.getElementById('output').innerHTML = `<label>${data}</label>`;
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// }


// function getJSON() {
//     // get json output from local directory using FetchAPI
//     fetch('post.json')
//         .then(function(res){
//             // return text method in Promise prototype
//             return res.json();
//         })
//         .then(function(data){
//             // print out data within promise object
//             console.log(data);
//             // instantiate output as empty string variable
//             // Its better this way because there are multiple list items in JSON which need to be looped over
//             let output = '';
//             data.forEach(function(post){
//                 output += `<label>
//                                 <li>${post.title}</li>
//                                     <ul>${post.body}</ul>
//                             </label>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// };


// function getExternalResponse() {
//     // get json output from designated URL using FetchAPI
//     fetch('https://api.github.com/users')
//         .then(function(res){
//             // return text method in Promise prototype
//             return res.json();
//         })
//         .then(function(data){
//             // print out data within promise object
//             console.log(data);
        
//             // instantiate output as empty string variable
//             // Its better this way because there are multiple list items in JSON which need to be looped over
//             let output = '';
//             data.forEach(function(user){
//                 // loop over each element in data array and retrieve login key value
//                 output += `<label><li>${user.id}:${user.login}</li></label>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// };



// better way to write above functions using fat arrow functions

function getText() {
    // get text file from local directory using FetchAPI
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = `<label>${data}</label>`;
        })
        .catch(err => console.log(err));
}


function getJSON() {
    // get json output from local directory using FetchAPI
    fetch('post.json')
        .then(res => res.json())
        .then(data => {
            // print out data within promise object
            console.log(data);
            // instantiate output as empty string variable
            // Its better this way because there are multiple list items in JSON which need to be looped over
            let output = '';
            data.forEach(post => {
                output += `<label>
                                <li>${post.title}</li>
                                    <ul>${post.body}</ul>
                            </label>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
};


function getExternalResponse() {
    // get json output from designated URL using FetchAPI
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(user => output += `<label><li>${user.id}:${user.login}</li></label>`)
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err){
            console.log(err);
        });
};

