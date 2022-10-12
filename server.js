const express = require('express');
const app = express();
let cors = require('cors');
const config = require('./config')[process.env.NODE_ENV||"dev"]
const PORT = config.port
//var bodyParser = require("body-parser");

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: config.connectionString
});
pool.connect();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.get("/api/guitars", (req, res) => {
    console.log("staring get request.")
    pool.query(`SELECT * FROM guitars`)
    .then(result => {
        res.send(result.rows);
    })

});


/*app.get("/api/guitars/:id", (req, res) => {
    let id = req.params.id
    console.log(id);
    pool.query(`SELECT * FROM guitars WHERE id=${id};`)
    .then(result => {
        res.send(result.rows)
    })
});*/

app.post("/api/guitars/create", (req, res) => {
    let createRow = req.body
   console.log(createRow);
pool.query(`INSERT INTO guitars (model, brand, color, fretNum) VALUES
('${createRow.model}', '${createRow.brand}', '${createRow.color}', ${createRow.fretNum});`)
    .then (result => {
    res.send(result.rows);
})
});

app.delete("/api/guitars/:id", (req, res) => {
   
    let deletedId = req.params.id;
   console.log(deletedId);
pool.query(`DELETE FROM guitars WHERE id = ${deletedId};`)

})






app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

