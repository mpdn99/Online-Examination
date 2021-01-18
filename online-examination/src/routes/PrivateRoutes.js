import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard/Dashboard'
import Students from '../components/Admin/Students/Students'
import Subjects from '../components/Admin/Subjects/Subjects'
import Questions from '../components/Admin/Questions/Questions'
import Results from '../components/Admin/Results/Results'

const PrivateRouter = () => {
    return(
        <div>
            <Route path="/admin">
                <Dashboard/>
            </Route>
            <Route path="/admin/students">
                <Students/>
            </Route>
            <Route path="/admin/subjects">
                <Subjects/>
            </Route>
            <Route path="/admin/questions">
                <Questions/>
            </Route>
            <Route path="/admin/result">
                <Results/>
            </Route>
        </div>
    )
}

export default PrivateRouter;