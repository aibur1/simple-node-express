const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('yahhoo I am learning node and express.');
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0171111111' },
    { id: 1, name: 'shabnor', email: 'shabnor@gmail.com', phone: '0172222222' },
    { id: 2, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0173333333' },
    { id: 3, name: 'sucorita', email: 'suchorita@gmail.com', phone: '017444444' },
    { id: 4, name: 'soniya', email: 'Soniy@gmail.com', phone: '0175555555' },
    { id: 5, name: 'susmita', email: 'susmita@gmail.com', phone: '0176666666' }
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query params/serach query
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})