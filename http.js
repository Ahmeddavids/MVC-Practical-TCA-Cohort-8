// Http is a simple HTTP client for making requests to a server. It provides methods for sending GET, POST, PUT, PATCH and DELETE requests, as well as handling responses and errors. The Http client can be used in both browser and Node.js environments, making it versatile for various applications.

// GET Request
// The GET method is used to retrieve data from a server. It is the most common HTTP method and is used to request data from a specified resource. The GET method should not be used for operations that cause side effects, such as creating or updating data.

// POST Request
// The POST method is used to send data to a server to create a new resource. It is commonly used when submitting form data or uploading files. The POST method can also be used to send data in the request body, which allows for more complex data structures to be sent to the server.

// PUT Request
// The PUT method is used to update an existing resource on the server. It replaces the entire resource with the new data provided in the request body. If the resource does not exist, the server may create a new resource with the provided data.

// PATCH Request
// The PATCH method is used to apply partial modifications to a resource on the server. Unlike PUT, which replaces the entire resource, PATCH allows for updating only specific fields of a resource. This is useful when you want to make small changes without sending the entire resource data.

// DELETE Request
// The DELETE method is used to remove a resource from the server. It is commonly used to delete data, such as removing a user account or deleting a post. The DELETE method should be used with caution, as it permanently removes the specified resource from the server.

const http = require('http');

const app = http.createServer((request, response) => {
    // response.writeHead(200, {"content-type": "text/plain"});
    // response.end("Welcome to my Server")
    if (request.url == '/') {
        response.writeHead(200, { "content-type": "text/plain" });
        response.end("Welcome to my Server")
    } else if (request.url == '/home') {
        response.writeHead(200, { "content-type": "text/plain" });
        response.end("Homepage accessed")
    }
})

app.listen(2998, () => {
    console.log('Server is up and running on PORT: 2998')
})