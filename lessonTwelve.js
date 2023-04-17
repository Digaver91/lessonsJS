const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Node.js HTTP Server</h1>`);
    res.write(`<p>Current user name: ${os.userInfo().username}</p>`);
    res.write(`<p>OS Type: ${os.type()}</p>`);
    res.write(`<p>System work time: ${Math.floor(os.uptime() / 60)}</p>`);
    res.write(`<p>Current work directory: ${process.cwd()}</p>`);
    res.write(`<p>Server file: ${path.basename(__filename)}</p>`);
    res.end();
  });
  
  server.listen(5000, () => {
    console.log('Server works on port 5000');
  });