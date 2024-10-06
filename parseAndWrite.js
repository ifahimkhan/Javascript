const http = require('http');  
const url = require('url');   
const fs = require('fs');     

const url1 = 'https://portal.svkm.ac.in/MPSTME-NM-M/markAttendanceForm';
const url2 = 'https://www.google.com/search?q=google&rlz=1C1CHBD_enIN941IN941&oq=google&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j0i131i433i512j69i60l5.2029j0j4&sourceid=chrome&ie=UTF-8';

function parseUrl(inputUrl) {
    const parsedUrl = url.parse(inputUrl, true);
    return `
        Href: ${parsedUrl.href}
        Protocol: ${parsedUrl.protocol}
        Host: ${parsedUrl.host}
        Pathname: ${parsedUrl.pathname}
        Query: ${JSON.stringify(parsedUrl.query)}
    `;
}

const url1Result = parseUrl(url1);
const url2Result = parseUrl(url2);

const fileContent = `
Parsed URL 1:
${url1Result}

Parsed URL 2:
${url2Result}
`;

const filePath = './parsedUrls.txt';
fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('Parsed URLs written to file successfully.');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        
        console.log('File Content:');
        console.log(data);

        http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body>');
            res.write('<h1>File Content:</h1>');
            res.write(`<pre>${data}</pre>`);  // Display file content in browser
            res.write('</body></html>');
            res.end();
        }).listen(3001, () => {
            console.log('Server running at http://localhost:3001/');
        });
    });
});
