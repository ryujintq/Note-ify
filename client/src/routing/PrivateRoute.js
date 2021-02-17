import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ token, component: Component, ...rest }) => {
    return <Route {...rest} render={props => !token ? (<Redirect to='/login' />)
        : (<Component {...props} />)} />
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps)(PrivateRoute)