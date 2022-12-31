// API Library using await/async and Fetch API to perform CRUD ops
class EasyHTTP {
    // HTTP GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
// HTTP POST Requet
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
// HTTP PUT Requet
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
// HTTP DELETE Request
    async delete(url, data) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
            
        });
        const resData = await 'Resource deleted!';
        return resData;
    }

}