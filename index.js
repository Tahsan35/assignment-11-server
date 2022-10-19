const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello mama.whats up!')
})
app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/user/:id', (req, res) => {
    //console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

const users = [
    {
        id: 1,
        name: "tahsan",
        dept: "socio"
    },
    {
        id: 2,
        name: "rahim",
        dept: "socio"
    },
]

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v7opeaw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('db connected')
    // perform actions on the collection object
    client.close();
});
