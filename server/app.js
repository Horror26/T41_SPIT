const connectDB = require("./db");
const express = require("express");
var cors = require("cors");

connectDB();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/farmer", require("./routes/farmer"));
app.use("/api/lender", require("./routes/lender"));

app.listen(port, () => console.log(`backend listening on port ${port}`));
