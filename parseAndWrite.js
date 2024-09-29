const http = require('http');  // To create a web server
const url = require('url');    // To parse URLs
const fs = require('fs');      // To interact with the file system

// URLs to parse
const url1 = 'https://portal.svkm.ac.in/MPSTME-NM-M/markAttendanceForm';
const url2 = 'https://www.google.com/search?q=google&rlz=1C1CHBD_enIN941IN941&oq=google&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j0i131i433i512j69i60l5.2029j0j4&sourceid=chrome&ie=UTF-8';

// Function to parse URLs and return formatted results
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

// Step 1: Parse the URLs and prepare content
const url1Result = parseUrl(url1);
const url2Result = parseUrl(url2);

// Content to be written into the file
const fileContent = `
Parsed URL 1:
${url1Result}

Parsed URL 2:
${url2Result}
`;

// Step 2: Write parsed content to a text file
const filePath = './parsedUrls.txt';
fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('Parsed URLs written to file successfully.');

    // Step 3: Read the file content and display it in the console and browser
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        
        // Display content in the console
        console.log('File Content:');
        console.log(data);

        // Create an HTTP server to display the content in the browser
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
