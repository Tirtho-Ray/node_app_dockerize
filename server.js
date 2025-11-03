const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 8080;

// mongoose.connect('mongodb+srv://docker_nodeApp:Qm9jOx0Jl2eYt8mK@cluster0.thodmul.mongodb.net/?appName=Cluster0')
//     .then(() => console.log(' Connected to MongoDB'))
//     .catch(err => console.log(' DB Error:', err));

app.get("/products", (req, res) => {
    return res.json([
        { id: 1, name: "aru", email: "aru@gmail.com" },
        { id: 2, name: "aru", email: "aru1@gmail.com" },
        { id: 3, name: "aru", email: "aru2@gmail.com" }
    ])
})

app.get('/', (req, res) => res.send('Node + MongoDB running in Docker!'));
app.listen(port, () => console.log('Server running on port 3000'));
