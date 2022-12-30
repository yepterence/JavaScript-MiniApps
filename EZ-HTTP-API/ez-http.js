// EasyHTTP library created using XHR/Ajax. 
// This libary allows for user to create, post, update and delete posts from the easyHTTP API.

function easyHTTP(){
    this.http = new XMLHttpRequest();

}

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback(`Issue with retrieval, http status: ${self.http.status}`);
        }
    };
    this.http.send();
} 

// Make HTTP POST request 
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST',url, true);
    // Set request header 
    this.http.setRequestHeader('Content-type','application/json');
    
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    // convert to JSON and then send
    this.http.send(JSON.stringify(data));
}

// Make HTTP PUT request 
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    // convert to JSON and then send
    this.http.send(JSON.stringify(data));
}

// Make HTTP DELETE request 
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200) {
            callback(null, 'Post deleted successfully');
        } else {
            callback(`Issue with deleting, http status: ${self.http.status}`);
        }
    };
    this.http.send();
} 