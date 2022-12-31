// const http = new easyHTTP;
// const base_url = 'https://jsonplaceholder.typicode.com';
// // Get posts 
// // http.get(`${base_url}/posts`, function(err, posts) {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log(posts);
// //     }
// // });

// // Create mock data 
// const data = {
//     title: 'Custom Post',
//     body: 'This is a custom Post'
// };

// // Create post
// // http.post(`${base_url}/posts/`, data, function(err, post) {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // });


// // Update post 
// // http.put(`${base_url}/posts/1`, data, function(err, post) {
// //     if(err) {
// //         console.log(err);
// //     } else {
// //         console.log(post);
// //     }
// // });

// // Delete post
// http.delete(`${base_url}/posts/1`, function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'
const http = new EasyHTTP;

// http.get(BASE_URL)
//         .then(data => console.log(data))
//         .catch(err => console.log(err));

// User Data
const mock_data = {
    name: 'John Doe',
    username: 'JohnDoe',
    email: 'jdoe@email.com'
}

// // Create User
// http.post(BASE_URL, mock_data)
//         .then(data => console.log(data))
//         .catch(err => console.log(err));


// // Update User
// http.put(`${BASE_URL}/2`, mock_data)
//         .then(data => console.log(data))
//         .catch(err => console.log(err));


// Delete User
http.delete(`${BASE_URL}/2`)
        .then(data => console.log(data))
        .catch(err => console.log(err));
