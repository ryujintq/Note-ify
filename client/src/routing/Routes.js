import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import NoteDetail from '../pages/NoteDetail/NoteDetail'
import setAuthContext from '../utils/setAuthToken'
import CreateNote from '../pages/CreateNote/CreateNote';

const Routes = () => {

    useEffect(() => {
        const initialize = () => {
            if (localStorage.token) {
                setAuthContext(localStorage.token)
            }
        }

        initialize()
    }, [])

    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute exact path='/' component={Main} />
            <PrivateRoute exact path='/create-note' component={CreateNote} />
            <PrivateRoute exact path='/note-detail' component={NoteDetail} />
        </Switch>
    )
}

export default Routes
