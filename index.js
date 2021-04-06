const express = require("express")
const mongoose = require("mongoose");

// ================================DATABASE CONNECTION===================================================
// =======================================================================================================
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected...");
});


//=================================PORT CONFIGURATIONS==========================================
// ======================================================================================================
const PORT = process.env.port || 5000;
const app = express()

app.route("/").get((req, res) => res.json("API Running"));

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));