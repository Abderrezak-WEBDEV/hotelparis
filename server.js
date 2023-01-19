const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Node server Started using nodemon'));
// tapez la commande sur le terminal 'node server'
//puis la commande 'npm i nodemon'
//puis la commande 'nodemon server'
