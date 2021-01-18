import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Student/Home/Home'
import History from '../components/Student/History/History'
import Exam from '../components/Student/Exam/Exam'

const PublicRouter = () => {
    return(
        <div>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/history">
                <History/>
            </Route>
            <Route path="/exam">
                <Exam/>
            </Route>
        </div>
    )
}

export default PublicRouter;