const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')

//@route    POST /api/v1/users/signup
//@desc     Register the user
//@body     name, email, password
//@access   Public
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body

    try {
        //create new user
        const user = new User({ name, email })

        //encrypt password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        //save user
        await user.save()

        //generate token
        const token = jwt.sign({ userId: user._id }, 'MY_SUPER_AWESOME_SECRET_KEY')

        //return token
        return res.status(200).json({ status: 'success', data: token })
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 'error', message: 'Something went wrong with the server' })
    }
})

//@route    POST /api/v1/users/login
//@desc     Authenticate user & get token
//@body     email, password
//@access   Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        //find user
        const user = await User.findOne({ email })

        //if no user, send fail
        if (!user) {
            return res.status(422).json({ status: 'fail', message: 'Invalid username or password' })
        }

        //check password match
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(422).json({ status: 'failed', message: 'Invalid username or password' })
        }

        //generate token
        const token = jwt.sign({ userId: user._id }, 'MY_SUPER_AWESOME_SECRET_KEY')

        //return token
        return res.status(200).json({ status: 'success', data: token })
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 'error', message: 'Something went wrong with the server' })
    }
})

module.exports = router