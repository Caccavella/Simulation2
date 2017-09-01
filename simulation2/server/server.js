require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = `postgres://postgres:Archangel++@localhost/simulation2`;

var app = express(); 
var c = require('./controller')
app.use(bodyParser.json());
app.use(cors())

massive(connectionString).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file().then(res => {
        console.log(res)
    })

}).catch(err => {
    console.log(err)
})



/* PROPERTY ENDPOINTS */

app.post('/api/properties', c.createHomes)
app.get('/api/properties/', c.getHomes)
app.delete('/api/properties/:id', c.deleteHomes)
// app.get('/api/properties/filter', c.filterHomes)







app.listen(4030, () => {
    console.log('Listening on port 4030');
})