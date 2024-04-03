// Importing required modules
const http = require('http');

// Defining the port number
const PORT = 3000;

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Sending the response
  res.end('Hemlo Dosto!\n');
});

// Starting the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


