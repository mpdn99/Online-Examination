import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Dashboard from '../Dashboard/Dashboard'
import Exam from '../Student/Home/Home'
import useToken from './useToken'
import LogIn from '../Login/Login3'

const App = () => {
    const {token, setToken} = useToken();

    if(!token){
        return <LogIn setToken={setToken}/>
    }
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/preferences">
                        <Exam/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
