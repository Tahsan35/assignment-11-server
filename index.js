const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;


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