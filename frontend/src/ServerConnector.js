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
    console.log(login);
    console.log(password);
    fetch("http://localhost:3001/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({login: login.toString(), password: password.toString()}),
    }).
    then(ans => {console.log(ans.json()); ans.json();}).then(answer => {
        if(answer.status !== null){
            this.userAuthorized = true;
                this.userStatus = answer.status.toLowerCase();
                console.log(this.userStatus);
        }
    });
}

export default ServerConnector;