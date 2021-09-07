require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
