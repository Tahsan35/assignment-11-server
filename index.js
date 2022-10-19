const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v7opeaw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const perfumeCollection = client.db("perfumeWareHouse").collection('perfume');
        const uploadCollection = client.db("perfumeWareHouse").collection('upload');


        app.get('/perfume', async (req, res) => {
            const query = {};
            const cursor = perfumeCollection.find(query);
            const perfume = await cursor.toArray();
            res.send(perfume);
        });
        // get single item by id 
        app.get('/perfume/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await perfumeCollection.findOne(query);
            res.send(result);
        });

        // delete single item by id 
        app.delete('/perfume/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await perfumeCollection.deleteOne(query);
            res.send(result);
        });
    }
    finally {
        //client.connect()
    }
};
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running Genius Server');
})

app.listen(port, () => {
    console.log("Listening To port", port);
})
