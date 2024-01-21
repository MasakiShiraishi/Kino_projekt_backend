import express from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtain the URL of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from "path";
const app = express();

console.log("This is " + __filename);
console.log("This is " + __dirname);

// Serve static files from the 'static' directory
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", async (request, response) => {
  // const buf = await fs.readFile('./assets/index.html');
  const buf = await fs.readFile("./static/index.html");
  const html = buf.toString();
  console.log(buf);
  response.send(html);
});
app.get("/header.html", async (request, response) => {
  const buf = await fs.readFile("./static/header.html");
  const html = buf.toString();
  response.send(html);
});

app.get("/footer.html", async (request, response) => {
  const buf = await fs.readFile("./static/footer.html");
  const html = buf.toString();
  response.send(html);
});

// app.get('/:name', async (request, response) => {
//   // const buf = await fs.readFile('./assets/index.html');
//   const buf = await fs.readFile('./index.html'); // パスを修正
//   const html = buf.toString();

//   const changed = html.replace('world', request.params.name);

//   response.send(changed);
// });

app.listen(3080, () => {
  console.log("Server is running on http://localhost:3080");
});

/* Manual implementation
app.get('/*', async (request, response) => {
  const fileName = `./static${request.path}`;
  const buf = await fs.readFile(fileName);

  // Find suffix (e.g. "css" for "main.css")
  const fileElements = request.path.split('.');
  const fileType = fileElements[fileElements.length - 1];

  response.type(fileType);
  response.send(buf);
});
*/
