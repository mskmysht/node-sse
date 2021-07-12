const { spawn } = require('duplex-child-process');

const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const websocketStream = require('websocket-stream/stream');


const template = `
<!DOCTYPE html><html><body>
<h1>SSE Express</h1>
<a href="/hoge">start</a>
<script type="text/javascript">
const source = new EventSource("/stream");
source.onmessage = e => {
  document.body.innerHTML += e.data + "<br>"
};
</script></body></html>`;

const sp = spawn('deno', ['run', 'hoge.js']);

app.get('/', (req, res) => {
  res.send(template);
});

// server-sent event stream
app.ws('/hoge', (ws, req) => {
  const stream = websocketStream(ws, { binary: true });
  sp.pipe(stream);
});

app.listen(3000);
