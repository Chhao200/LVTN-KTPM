const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try{
        const {name, email, password, confirmpassword, phone} = req.body
        if( !name || !email || !password || !confirmpassword || !phone) {
            return res.status(200).json({
                status: `ERR`,
                message: ''
            })
                
        }
        const res = await UserService.createUser()
        return res.status(200).json(res)
    } catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser
}