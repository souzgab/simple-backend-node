const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors(), routes)

app.listen(3003, () => { console.log(`Server Online`) })