class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            
            // Needs to be wrapped in a promise otherwise data is returned pre-emptively ie, null/undefined will be returned
            fetch(url)
            .then(res => res.json())
            // resolve to send response, reject to send error
            .then(data => resolve(data))
            .catch(err => reject(err))
            
        });
        
    }
    // Make an HTTP POST Request
    // add data param to post
    post(url, data) {
        return new Promise((resolve, reject) => {
            // add object that describes method, content type in headers, and body
            fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                // wrap data in json.stringify
                body: JSON.stringify(data)
                })
                .then(res => res.json())
                // resolve to send response, reject to send error
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            // add object that describes method, content type in headers, and body
            fetch(url, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                // wrap data in json.stringify
                body: JSON.stringify(data)
                })
                .then(res => res.json())
                // resolve to send response, reject to send error
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
        
    }
    delete(url) {
        return new Promise((resolve, reject) => {
            // add object that describes method, content type in headers, and body
            fetch(url, {
                method: 'DELETE',
                headers: {'Content-type': 'application/json'}
                })
                .then(res => res.json())
                // resolve to send response, reject to send error
                .then(data => resolve("Resource deleted!"))
                .catch(err => reject(err))
        });
    }
}