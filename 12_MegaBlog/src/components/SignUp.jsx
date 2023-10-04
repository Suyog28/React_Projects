import { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";



function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(null)

    const signUp = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    navigate('/')
                }

            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className="flex items-center justify-center">

            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl
             p-10 border border-black/10`}>

                <div className="mb-2 flex justify-center">
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2
                    className='text-center text-2xl font-bold leading-tight'
                >Sign up to create your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?
                    <Link to="/signup" className='font-medium text-primary 
                    transition-all duration-200 hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-center text-red-600 mt-8'>{error}</p>}
                <form onSubmit={handleSubmit(signUp)} className='mt-8' >
                    <div className='space-y-5'>
                        <Input
                            type="text"
                            placeholder='Username'
                            className='w-full'
                            label="Username: "
                            {...register('username', {
                                required: true
                            })
                            } />
                        <Input
                            type="email"
                            placeholder='Email'
                            className='w-full'
                            label="Email: "
                            {...register('email', {
                                required: true, validate: {
                                    matchPatern:
                                        (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
                                            || "Email address must be a valid address"
                                }

                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder='Password'
                            {...register('password', { required: true })}
                        />
                        <Button type='submit' className='w-full'>Create Account</Button>
                    </div>

                </form>
            </div>

        </div >
    )
}

export default SignUp