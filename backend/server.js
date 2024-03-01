const express = require('express');
const app = express();
const taskRouter = require('./Router/TaskRouter');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
const cors = require('cors');
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());
app.use(
  cors({
    origin: ['https://ccript-evaluation-task.vercel.app'],
    methods: ['POST', 'GET', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port http://localhost:${PORT}`);
});
