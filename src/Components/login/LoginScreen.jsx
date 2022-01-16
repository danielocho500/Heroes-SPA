import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navegation = useNavigate();

    const handleLogin = () => {
        navegation('/', {
            replace: true
        })
    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
