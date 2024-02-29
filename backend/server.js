const express = require('express');
const app = express();
const PORT = 8080;
const taskRouter = require('./Router/TaskRouter');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taskCollection');
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
