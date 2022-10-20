const express = require('express');
const app = express();
const cors = require('cors');

const contactRoute = require ("./routes/contact.route.js")


app.use(express.json());
app.use(cors());

app.use("/api/v1", contactRoute)


app.get("/", (req, res) => {
    res.send("Wellcome to Address Book Server. Routes are working.")
});
app.get("*", (req, res)=> {
    res.send("Opps! This rout is not created.")
});

module.exports = app;