const express = require('express');
const app = express();
let cors = require('cors');
const config = require('./config')[process.env.NODE_ENV||"dev"]
const PORT = config.port


const { Pool } = require('pg');
const pool = new Pool({
    connectionString: config.connectionString
});
pool.connect();
app.use(cors());
app.use(express.json());

app.get("/api/guitars", (req, res) => {
    pool.query(`SELECT * FROM guitars`)
    .then(result => {
        res.send(result.rows);
    })
});

app.get("/api/guitars/:id", (req, res) => {
    let id = req.params.id
    console.log(id);
    pool.query(`SELECT * FROM guitars WHERE id=${id};`)
    .then(result => {
        res.send(result.rows)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

