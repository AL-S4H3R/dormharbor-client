import React, { FC, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Auth from './pages/Auth'
import DislpayResults from './pages/DisplayResults'
import Landing from './pages/LandingPage'

const App: FC = () => {
    return(
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/display" component={DislpayResults} />
                    <Route path="/auth" component={Auth}/>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App