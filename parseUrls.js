const http = require('http');  
const url = require('url');    

const url1 = 'https://portal.svkm.ac.in/MPSTME-NM-M/markAttendanceForm';
const url2 = 'https://www.google.com/search?q=google&rlz=1C1CHBD_enIN941IN941&oq=google&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j0i131i433i512j69i60l5.2029j0j4&sourceid=chrome&ie=UTF-8';

function parseUrl(inputUrl) {
    const parsedUrl = url.parse(inputUrl, true);
    console.log(parsedUrl);  
    return `
        <h2>Parsed URL:</h2>
        <p>Href: ${parsedUrl.href}</p>
        <p>Protocol: ${parsedUrl.protocol}</p>
        <p>Host: ${parsedUrl.host}</p>
        <p>Pathname: ${parsedUrl.pathname}</p>
        <p>Query: ${JSON.stringify(parsedUrl.query)}</p>
    `;
}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    const url1Result = parseUrl(url1);
    const url2Result = parseUrl(url2);
    
    res.write('<html><body>');
    res.write('<h1>URL Parsing Results</h1>');
    res.write('<h3>URL 1</h3>');
    res.write(url1Result);
    res.write('<h3>URL 2</h3>');
    res.write(url2Result);
    res.write('</body></html>');
    res.end();
}).listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});
