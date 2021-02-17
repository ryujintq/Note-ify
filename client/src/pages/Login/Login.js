import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Error from '../../components/Error/Error'
import LinkText from '../../components/LinkText/LinkText'
import './Login.css'

import { login, setAuthError, clearAuthError } from '../../redux/actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Login = ({ token, errorMessage, login, setAuthError, clearAuthError }) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => clearAuthError(), [clearAuthError])

    const handleButtonPress = () => {
        if (!email) {
            setAuthError('Please enter an email')
            return
        } else if (!password) {
            setAuthError('Please enter a password')
            return
        }

        login(email, password)
    }
    
    if(token) {
        history.push('/')
    }

    return (
        <div className='login'>
            <h1 className='heading'>Login</h1>
            <Input text='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input text='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Error errorMessage={errorMessage} />
            <Button onClick={handleButtonPress} />
            <LinkText to='/signup' text='Dont have an account? Click here to sign up instead.' />
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage,
    token: state.auth.token
})

export default connect(mapStateToProps, { login, setAuthError, clearAuthError })(Login)
