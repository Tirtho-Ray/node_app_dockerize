// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from Dockerized Node.js App fucking 🚀');
});

server.listen(8080, () => {
    console.log('Server is running on port 3000');
});
