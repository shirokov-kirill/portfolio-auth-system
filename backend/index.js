const config = require('./config.json');
const express = require('express');
const app = express();
const DataBase = require('./DataBase.js');

let dataBase = new DataBase();

app.get('/auth/:login/:password', (req, res) => {
    let login = req.params['login'];
    let password = req.params['password'];
    if(dataBase.contains(login)){
        let {realPassword, status} = dataBase.get(login);
        if(realPassword === password){
            res.send(status);
        } else {
            res.send(null);
        }
    } else {
        dataBase.add(login, password);
        let {realPassword, status} = dataBase.get(login);
        res.send(status);
    }
});

app.listen(config.port, () => console.log('Example app listening on port ' + config.port + '!'));