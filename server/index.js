const express = require("express")
const app = express()

//=================================PORT CONFIGURATIONS==========================================
// ======================================================================================================
const PORT = process.env.port || 5000;

app.route("/").get((req, res) => res.json("API Running"));

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));