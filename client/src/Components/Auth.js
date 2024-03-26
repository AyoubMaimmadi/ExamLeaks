import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signin, signup } from '../actions/auth'

const Auth = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [password2, setpassword2] = useState('')
    const [isSignup, setisSignup] = useState(false)

    const signUpEvent = (e) => {
        e.preventDefault()
        const formData = { username, email, password, password2 }
        setusername('')
        setemail('')
        setpassword('')
        setpassword2('')
        if (!isSignup) {
            dispatch(signup(formData, history))
            alert('You have successfully signed up')
        } else {
            dispatch(signin(formData, history))
            alert('You have successfully signed in')
        }
    }

    return (
        <>
            <section className='exam section'>
                <br />
                <br />
                <br />
                <div className='title'>
                    <h2 id='Add'>
                        Sign up
                        <a className='scroll-link'></a>
                    </h2>
                    <div className='underline'></div>
                    <br />
                    <br />
                </div>
            </section>
            <div className='uperuper'>
                <div className='container myowncontainer'>
                    <form autoComplete='off' onSubmit={signUpEvent}>
                        <div className='row pt-5 mx-auto'>
                            <div className='col-8 form-group mx-auto'>
                                <input
                                    type='text'
                                    required
                                    className='form-control'
                                    placeholder='User Name'
                                    value={username}
                                    onChange={(e) => {
                                        setusername(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='col-8 form-group pt-2 mx-auto'>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => {
                                        setemail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='col-8 form-group pt-2 mx-auto'>
                                <input
                                    type='password'
                                    required
                                    className='form-control'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => {
                                        setpassword(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='col-8 form-group pt-2 mx-auto'>
                                <input
                                    type='password'
                                    required
                                    className='form-control'
                                    placeholder='Repeat Password'
                                    value={password2}
                                    onChange={(e) => {
                                        setpassword2(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='d-flex justify-content-center pt-4'>
                                <input type='submit' className='btn3' value='Sign up'></input>
                            </div>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center pt-4'>
                        <Link to='/'>
                            <button className='btn3'>Home</button>
                        </Link>
                    </div>

                    <div>
                        <br />
                        <h6 className='text-center'>Already have an account? </h6>
                        <Link to='/sign-in'>
                            <button className='btn4'>Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
