const http = require("http");
const params = process.argv.slice(2);

const listener = (request, response) => {
    console.log(request.url);
    response.end('Hello from Node.js Server!');
};


const server = http.createServer(listener);
const port = params[0] || 80;

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
