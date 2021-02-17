const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ status: 'failed', message: 'You must be logged in' })
    }

    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, 'MY_SUPER_AWESOME_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).json({ status: 'failed', message: 'You must be logged in' })
        }

        const { userId } = payload

        req.id = userId

        next()
    })
}