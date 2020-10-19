import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Start from './pages/Login'
import './styles/App.css';
export default class App extends Component {
    state = {
        tokenAuth: ''
    };
    handleAuthToken = async (token) => {
        await this.setState({ token: token })
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <Start handleAuthToken={this.handleAuthToken} />} />
                    <Route exact path="/Home" component={() =>
                        <Home isAuthed={this.state.tokenAuth}
                        />} />
                </Switch>
            </BrowserRouter>
        )
    }
}
