const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://docker_nodeApp:Qm9jOx0Jl2eYt8mK@cluster0.thodmul.mongodb.net/?appName=Cluster0')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.log('❌ DB Error:', err));

app.get('/', (req, res) => res.send('Node + MongoDB running in Docker!'));
app.listen(3000, () => console.log('Server running on port 3000'));
