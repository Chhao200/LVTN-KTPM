const User = require('../models/UserModel')
const brypt = require('bcrypt')
const { generalAccessToken } = require('./JwtService')


const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'The email is already',
                })
            }
            const hash = brypt.hashSync(password, 10)
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                phone
            })
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = (userLogin)
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'The user is not defined',
                })
            }
            const comparePassword = brypt.compareSync(password, checkUser.password)
            console.log('comcomparePassword', comparePassword)
            if (!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'The password or user is incorrect',
                })

            }
            const access_token = generalAccessToken({
                id: checkUser.id,
                isAmin: checkUser.isAmin
            })

            console.log('acaccess_token', access_token)
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: checkUser
            })
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createUser,
    loginUser
}