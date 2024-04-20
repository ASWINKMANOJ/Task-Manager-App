const express = require('express');
const app = express();
const tasks = require('./routes');
const connectDB = require('./connect');

app.use(express.static('./public'));
app.use(express.json())

app.use("/api/v1/tasks", tasks);

const port = 3000

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://aswin:aswin2024@cluster0.rbxkya8.mongodb.net/"
    );
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
