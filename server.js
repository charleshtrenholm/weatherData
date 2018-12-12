var express = require('express');
var app = express();
var path = require('path');

// require('./server/config/routes')(app);
app.use(express.static(__dirname + "/public/dist/public"));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(6789, function(){
    console.log('listening on port 6789');
})
