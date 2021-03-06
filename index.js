const express = require('express');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    res.send('Nothing here, say hello');
});

app.get('/hello', async (req, res) => {
    res.send({ hello: true, build: 2 });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`));
