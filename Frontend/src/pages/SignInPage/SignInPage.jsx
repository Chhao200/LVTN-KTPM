import React from 'react'
import SignIn from '../../components/SignIn/SignIn'


const SignInPage = () => {
    return (
        <div className='register-page'>
            <div className='register-form-container'>
                <h1 className='titile'>Đăng nhập</h1>
            </div>

            <form>
                <SignIn></SignIn>
            </form>

        </div>
    )
}

export default SignInPage
