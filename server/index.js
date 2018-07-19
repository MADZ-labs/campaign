const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('client/dist'));
app.listen(port, () => console.log(`listening to ${port}`));
