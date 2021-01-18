import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoleBasedRouting from './RoleBasedRouting'
import Home from '../components/Student/Home/Home'
import History from '../components/Student/History/History'
import Exam from '../components/Student/Exam/Exam'
import Dashboard from '../components/Admin/Dashboard/Dashboard'
import Students from '../components/Admin/Students/Students'
import Subjects from '../components/Admin/Subjects/Subjects'
import Questions from '../components/Admin/Questions/Questions'
import Results from '../components/Admin/Results/Results'
import Settings from '../components/Settings/Settings'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <RoleBasedRouting exact path="/home" component={Home} roles={'student'} />
                <RoleBasedRouting path="/history" component={History} roles={'student'} />
                <RoleBasedRouting path="/exam" component={Exam} roles={'student'} />
                <RoleBasedRouting exact path="/admin" component={Dashboard} roles={'admin'} />
                <RoleBasedRouting path="/students" component={Students} roles={'admin'} />
                <RoleBasedRouting path="/subjects" component={Subjects} roles={'admin'} />
                <RoleBasedRouting path="/questions" component={Questions} roles={'admin'} />
                <RoleBasedRouting path="/results" component={Results} roles={'admin'} />
                <Router path="/settings" component={Settings} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;