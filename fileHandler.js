const fs = require('fs');  

const filePath = './sample.txt';
const fileContent = `
This is the content of the file.
Node.js allows us to read and write files.
This content will be displayed on both the console and the browser.
`;

fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('File created successfully.');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:');
        console.log(data);  

        const http = require('http');
        http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body>');
            res.write('<h1>File Content:</h1>');
            res.write(`<pre>${data}</pre>`); 
            res.write('</body></html>');
            res.end();
        }).listen(3001, () => {
            console.log('Server running at http://localhost:3001/');
        });
    });
});
