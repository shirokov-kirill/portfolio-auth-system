
function DataBase(){
    this.loginToPasswordStatusMap = new Map([["admin", ["admin", "Admin"]]]);
}

DataBase.prototype.contains = function(login){
    return this.loginToPasswordStatusMap.has(login);
}

DataBase.prototype.add = function(login, password){
    this.loginToPasswordStatusMap.set(login, [password, 'Client']);
    return true;
}

DataBase.prototype.get = function(login){
    return this.loginToPasswordStatusMap.get(login);
}

module.exports = DataBase;