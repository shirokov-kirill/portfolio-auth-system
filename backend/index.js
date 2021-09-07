const config = require('./config.json');
const express = require('express');
const app = new express();
const DataBase = require('./DataBase.js');

const cors = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type");
    next();
};

app.use(cors);
app.use(express.json());

let dataBase = new DataBase();

app.post('/auth/', (req, res) => {
    if(!req.body){
        res.sendStatus(400);
    } else {
        let login = req.body.login;
        let password = req.body.password;
        if(dataBase.contains(login)){
            let {realPassword, status} = dataBase.get(login);
            if(realPassword === password){
                res.send(JSON.stringify({status: status}));
            } else {
                res.send(JSON.stringify({status: null}));
            }
        } else {
            dataBase.add(login, password);
            let {realPassword, status} = dataBase.get(login);
            res.send(JSON.stringify({status: status}));
        }
    }
});

app.listen(config.port, () => console.log('Example app listening on port ' + config.port + '!'));