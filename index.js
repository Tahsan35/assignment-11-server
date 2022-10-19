const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

//dbuser :dbusertahsan
//pass: i7IM9cBas3TaLw0l

//middleware
app.use(cors())

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


const uri = "mongodb+srv://dbusertahsan:i7IM9cBas3TaLw0l@cluster0.v7opeaw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('db connected')
    // perform actions on the collection object
    client.close();
});
