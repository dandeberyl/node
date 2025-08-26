import { createServer } from 'node:http';

function add(a, b) {
  return a + b;
}

console.log("Math test:", add(2, 3));

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const result = add(10, 20);
  res.end(`Hello World (ESM)\n10 + 20 = ${result}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
