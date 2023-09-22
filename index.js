const http = require ('http');
const url = require ('url');


const server = http.createServer((req, res) => {
const pathName = req.url;
if ( pathName === '/' || pathName === '/overview'){
res.end('This is the overview');
}
    else if (pathName === '/product') {
        res.end('This is the product');
    }
    else 
        res.writeHead(404, {
        
    });
    


         res.end('A Simple Web Server')     

    });

    server.listen(4000, '127.0.0.1', () => {

    console.log('Listening live on port 4000');
});
    