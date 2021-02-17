import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import LinkText from '../../components/LinkText/LinkText'
import Error from '../../components/Error/Error'
import { connect } from 'react-redux'
import { signup, setAuthError, clearAuthError } from '../../redux/actions/auth'
import { useHistory } from 'react-router-dom'
import './Signup.css'

const Signup = ({ token,errorMessage, signup, setAuthError, clearAuthError }) => {
   const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    useEffect(() => clearAuthError(), [clearAuthError])

    const handleButtonPress = async () => {
        if (!name) {
            setAuthError('Please enter your name')
            return
        }
        else if (!email) {
            setAuthError('Please enter an email')
            return
        } else if (!password) {
            setAuthError('Please enter a password')
            return
        } else if (password !== password2) {
            setAuthError('Passwords do not match')
            return
        }

        signup(name, email, password)
    }

    if(token) {
        history.push('/')
    }

    return (
        <div className='signup'>
            <h1 className='heading'>Signup</h1>
            <Input text='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <Input text='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input text='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input text='Confirm Password' type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
            <Error errorMessage={errorMessage} />
            <Button onClick={handleButtonPress} />
            <LinkText to='/login' text='Already have an account? Click here to login' />
        </div>
    )
}

const mapStateToProps = state => ({
    errorMessage: state.auth.errorMessage,
    token: state.auth.token
})

export default connect(mapStateToProps, { signup, setAuthError, clearAuthError })(Signup)
