import Pages from './Pages.js';

function ServerConnector(){
    this.userAuthorized = false;
    this.userStatus = "Nobody";
}

ServerConnector.prototype.isAbleToAccessPage = function(page){
    switch(page) {
        case Pages.AUTH:
            return true;
        case Pages.ADMIN:
            return (this.userAuthorized === true) && (this.userStatus === 'admin');
        case Pages.CLIENT:
            return (this.userAuthorized === true) && ((this.userStatus === 'client') || (this.userStatus === 'admin'));
        case Pages.HOME:
            return true;
        default: return false;
    }
}

ServerConnector.prototype.authorize = function(login, password){
    fetch("http://localhost:3001/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({login: login.toString(), password: password.toString()}),
    }).
    then(ans => ans.json()).then(answer => {
        let status = answer.status;
        if(status !== null){
            this.userAuthorized = true;
            this.userStatus = status.toLowerCase();
        }
    });
}

export default ServerConnector;