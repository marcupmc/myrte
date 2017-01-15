const express = require('express');
const app = express();

app.use('/dist', express.static(`${__dirname}/dist`));
app.use('/assets', express.static(`${__dirname}/assets`));

app.all('/*', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
