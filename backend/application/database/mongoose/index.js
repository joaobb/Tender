require("dotenv").config();
const mongoose = require("mongoose");

const db = {
  host: process.env.MONGO_HOST,
  database: process.env.MONGO_DB,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
};

const URI = `mongodb+srv://${db.username}:${db.password}@${db.host}/${db.database}?retryWrites=true&w=majority`;

mongoose.set("returnOriginal", false);

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("\nConnected to MongoDB\n");
});

mongoose.connection.on("error", (err) => {
  console.log(
    `\nAn error ocurred during connection to MongoDB. \n Error: ${err}\n`,
  );
});

mongoose.connection.on("disconnected", () => {
  console.log("\nDisconnected from MongoDB\n");
});
