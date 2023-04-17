function greetUser(userName) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  
    let greeting;
  
    if (currentHour >= 6 && currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good day";
    } else if (currentHour >= 18 && currentHour < 24) {
      greeting = "good evening";
    } else {
      greeting = "Good night";
    }
  
    return `${greeting}, ${userName}!`;
  }
  
  module.exports = {
    greetUser
  };

const http = require("http");
const personalmodule = require("./personalmodule");

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const userName = "Dmytro";
  const greeting = personalmodule.greetUser(userName);
  res.write(`
    <html>
      <head>
        <title>Привітання</title>
      </head>
      <body>
        <h1>${greeting}</h1>
      </body>
    </html>
  `);
  res.end();
}).listen(5000);

console.log("Server works on: http://localhost:5000/");