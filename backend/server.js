const express = require('express');
const app = express();
const PORT = 8090;
const taskRouter = require('./Router/TaskRouter');
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://abdullah:abdullah123@cluster0.byqsf7y.mongodb.net/todotaskdb?retryWrites=true&w=majority&appName=Cluster0'
);
const db = mongoose.connection;
const cors = require('cors');
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());
app.use(cors());

app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port http://localhost:${PORT}`);
});
