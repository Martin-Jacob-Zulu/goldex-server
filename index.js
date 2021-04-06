const express = require("express")
const mongoose = require("mongoose");
const PORT = process.env.port || 5000;
const app = express()

// ================================DATABASE CONNECTION===================================================
// =======================================================================================================
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected...");
});


// =================================MIDDLEWARE==================================================
// =================================================================================================
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);


//=================================PORT CONFIGURATIONS==========================================
// ======================================================================================================
app.route("/").get((req, res) => res.json("API Running"));

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));