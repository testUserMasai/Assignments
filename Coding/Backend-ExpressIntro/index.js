const express = require('express');
const app = express();

// Getting all users data
let users = require('./MOCK_DATA.json');

app.get('/', (req, res) => {
  return res.send('Welcome To Home Page');
});

app.get('/users', (req, res) => {
  return res.send({ data: users });
});

app.post('/users', (req, res) => {
  let user = req.body;
  users.push(user);
  return res.send('User added');
});

app.patch('/users/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  return res.send(`User with id ${id} has been updated`);
});

app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  users = users.filter((user) => user.id != id);
  return res.send(`User with id ${id} has been deleted`);
});

let PORT = 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server started at ${PORT}`);
});
