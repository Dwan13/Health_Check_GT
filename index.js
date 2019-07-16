const express = require('express');
const app = express();

const path = require('path');



app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");


app.get('/',(req, res) => {
  res.render("index");
});
app.get('/movie',(req, res) => {
  res.render("movie");
});

app.use(express.static("public"));
app.listen(8070);
