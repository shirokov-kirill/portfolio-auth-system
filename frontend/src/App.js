import './App.css';
import Auth from './AuthPage/Auth.js';
import Home from './HomePage/Home.js';
import Client from './ClientPage/Client.js';
import Admin from'./AdminPage/Admin.js';
import ReactDOM from 'react-dom';
import React from 'react';
import ServerConnector from './ServerConnector';
import Pages from './Pages';

const serverConnector = new ServerConnector();

function App() {
    return(
        <div class="heading">
            <header>
                <button class="headerButton homeButton" onClick={App.onHomeButtonClicked}>
                    Home
                </button>
                <button class="headerButton clientButton" onClick={App.onClientButtonClicked}>
                    Client
                </button>
                <button class="headerButton adminButton" onClick={App.onAdminButtonClicked}>
                    Admin
                </button>
                <button class="headerButton authorizeButton" onClick={App.onAuthButtonClicked}>
                    Authorize
                </button>
            </header>
            <section class="placementSection" id='1'>
                <Home/>
            </section>
        </div>
    );
}

App.onHomeButtonClicked = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('1'));
    if(serverConnector.isAbleToAccessPage(Pages.HOME)){
        ReactDOM.render(
            <Home/>,
            document.getElementById('1')
        );
    } else {
        ReactDOM.render(
            <Auth serverConnector = {serverConnector} next = {App.onClientButtonClicked}/>,
            document.getElementById('1')
        );
    }
}

App.onClientButtonClicked = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('1'));
    if(serverConnector.isAbleToAccessPage(Pages.CLIENT)){
        ReactDOM.render(
            <Client/>,
            document.getElementById('1')
        );
    } else {
        ReactDOM.render(
            <Auth serverConnector = {serverConnector} next = {App.onClientButtonClicked}/>,
            document.getElementById('1')
        );
    }
}

App.onAdminButtonClicked = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('1'));
    if(serverConnector.isAbleToAccessPage(Pages.ADMIN)){
        ReactDOM.render(
            <Admin/>,
            document.getElementById('1')
        );
    } else {
        ReactDOM.render(
            <Auth serverConnector = {serverConnector} next = {App.onClientButtonClicked}/>,
            document.getElementById('1')
        );
    }
}

App.onAuthButtonClicked = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('1'));
    ReactDOM.render(
        <Auth serverConnector = {serverConnector} next = {App.onClientButtonClicked}/>,
        document.getElementById('1')
    );
}

export default App;