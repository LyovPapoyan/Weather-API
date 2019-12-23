const express = require('express');

const app = express();

const fs = require('fs');

const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.get('/', function(req,res){
    if (!req.body) return res.sendStatus(400);
    let read = fs.readFileSync('./base.json', 'utf8');
    res.json(read)
});

app.post('/', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  fs.readFile('./base.json', function(err,data){
    let json = data && data.length ? JSON.parse(data) : [];
    json.push(req.body)
    
    fs.unlink('./base.json', function(){});

  fs.appendFile('./base.json',JSON.stringify(json), function(){})
 
})
  res.json(req.body)
})

app.listen(40000, () => console.log("running")
);
