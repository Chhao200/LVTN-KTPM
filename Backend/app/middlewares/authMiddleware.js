const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const authMiddleware = (req, res) => {
    const token = req.headers.token.split('')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(404).json({
                message: 'The Authentication',
                status: 'Error'
            })
        }
        const { payload } = user
        if (payload.isAdmin) {
            next()
        } else {
            return res.status(404).json({
                message: 'The Authentication',
                status: 'Error'
            })
        }
        console.log('user', user)
    });
}

const authUserMiddleware = (req, res) => {
    const token = req.headers.token.split('')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(404).json({
                message: 'The Authentication',
                status: 'Error'
            })
        }
        const { payload } = user
        if (payload.isAdmin || payload?.id === userId) {
            next()
        } else {
            return res.status(404).json({
                message: 'The Authentication',
                status: 'Error'
            })
        }
        console.log('user', user)
    });
}

module.exports = {
    authMiddleware,
    authUserMiddleware
}