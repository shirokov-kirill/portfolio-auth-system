
function DataBase(){
    this.loginToPasswordStatusMap = new Map([String, [String, String]]);
    this.loginToPasswordStatusMap.set('admin', ['admin', 'Admin']);
}

DataBase.prototype.contains = (login) => {
    return this.loginToPasswordStatusMap.has(login);
}

DataBase.prototype.add = (login, password) => {
    loginToPasswordStatusMap.set(login, [password, 'Client']);
    return true;
}

DataBase.prototype.get = (login) => {
    return loginToPasswordStatusMap.get(login);
}

module.exports = DataBase;