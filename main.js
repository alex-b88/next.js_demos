const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const url = req.url
    if (url === '/about') {
        return res.end(JSON.stringify({
            data: 'About page',
        }))

    }
    if (url === '/contact') {
        return res.end(JSON.stringify({
            data: 'Contact page',
        }))
    }

    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

server.listen(8000);