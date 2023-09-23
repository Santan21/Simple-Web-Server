const fs = require ('fs')
const http = require ('http');
const url = require ('url');


const server = http.createServer((req, res) => {
const pathName = req.url;
if ( pathName === '/' || pathName === '/overview'){
res.end('This is the overview');
}
    else if (pathName === '/product') {
        res.end('This is the product');
    } else if (pathName === '/api'){

        fs.readFile ('${__/dirname}/dev-data/data.json', 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end('data');
            
        });
        
    }
    else {
        res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world'
    });
         res.end('<h1>Page not founnd!<h1>')     
    }});

    server.listen(4000, '127.0.0.1', () => {

    console.log('Listening live on port 4000');
});
    