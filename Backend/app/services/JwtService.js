const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const generalAccessToken = async (payload) => {
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '30s' })
    return access_token
}

const generalRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' })
    return refresh_token
}

const refreshTokenJwtService = async (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('token', token)
            jwt.verify(token, process.env.REFRESH_TOKEN, (err, user) => {
                if (err) {
                    console.log('err', err)
                    resolve({
                        status: 'ERR',
                        message: 'The Authentication'
                    })
                }
                console.log('user', user)
            })
            resolve({
                status: 'OK',
                message: ' Success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    generalAccessToken,
    generalRefreshToken,
    refreshTokenJwtService
}