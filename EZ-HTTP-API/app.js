const http = new easyHTTP;
const base_url = 'https://jsonplaceholder.typicode.com';
// Get posts 
// http.get(`${base_url}/posts`, function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create mock data 
const data = {
    title: 'Custom Post',
    body: 'This is a custom Post'
};

// Create post
// http.post(`${base_url}/posts/`, data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// Update post 
// http.put(`${base_url}/posts/1`, data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete post
http.delete(`${base_url}/posts/1`, function(err, posts) {
    if(err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});