const http = require ('http');
const url = require ('url');


const server = http.createServer((req, res) => {
         const pathName = req.url;
         res.end('A Simple Web Server')       
    });

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening live on port 8000');
});
    