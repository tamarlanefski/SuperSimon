const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/usersRoutes');
app.use('/api/users', usersRoutes);

const addUser = async (user) => {
  const users = require('./models/users.js');
  validUser(user);
  await users.insertMany(user);
}

const validUser = (user) => {
  if (!(/^[~#!@$%^&*{}()=A-Za-z0-9]+$/.test(user.password) && user.password.length > 5)) {
    throw new error("password can contain only letters, numers and some symbols and minimum 5 chars");
  }
  if (!(/^[A-Za-zא-ת]+$/.test(user.name) && user.name.length > 2)) {
   
    throw new Error("name can contain only letters and must be minimum 3 letters");
  }
  return true;
}

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error(err)
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.put('/api/users/addUser', async (req, res) => {
  try {
    await addUser(req.body);
    res.status(201).send({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
