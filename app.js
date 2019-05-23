const express = require('express');

const app = express();

app.get(`/`, (req, res) => {
    res.send(`Hey there world!`);
});
    app.get(`/about`, (req, res) => {
        res.send(`I like long walks on the beach.`);
});

const port = (process.env.PORT || 4000);
    app.listen(port, () => console.log(`listening on 4000`));