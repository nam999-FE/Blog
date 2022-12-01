const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = 4000;

const BASE_URL = "mongodb://127.0.0.1:27017";

mongoose.connect(`${BASE_URL}/jwt`,{
 useNewUrlParser: true,
 useUnifiedTopology: true,
}).then(() => {
 console.log("DB Connection Successfully");
}).catch((err: any) => {
 console.log(err.message);
});

app.listen(PORT, () => {
 console.log("START SERVER 4000");
})

app.use(cors({
 origin: ["http://localhost:4000"],
 method: ["GET", "POST"],
 credentials: true,
}))

app.use(express.json());