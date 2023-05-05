const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((error) => console.log(error.message));
