import React, { useState } from 'react'
import Logo from '../assets/js.webp'
import authService from '../appwrite/authService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const user = await authService.signUpUser({ email, password, name });
            if (user) {
                console.log(`Successfully signed up user ${name}`);
                dispatch(login({ userData: user }));
                navigate('/')
            }
        } catch (error) {
            console.error("Error signing up user:", error);

            // More specific error messages based on error type
            if (error.code === 409) {
                setError("An account with this email already exists.");
            } else if (error.code === 400) {
                setError("Please check your input and try again.");
            } else {
                setError("Failed to create account. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        loading ? (
            <div className="flex items-center min-h-full flex-1 flex-col text-3xl text-gray-100 justify-center px-6 py-12 lg:px-8 h-screen bg-[#212121]">
                <h1>
                    Loading...
                </h1>
            </div>
        ) :
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-[#212121]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            alt="Your Company"
                            src={Logo}
                            className="mx-auto w-20 h-20 w-auto"
                        />
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100">
                            Create your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="text-red-500 text-sm text-center">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        autoComplete="name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#D2B62A] sm:text-sm/6"
                                    />
                                </div>
                            </div>


                            <div>
                                <label htmlFor="email" className="block flex justify-items-start text-sm/6 font-medium text-gray-100">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#D2B62A] sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block flex justify-items-start text-sm/6 font-medium text-gray-100">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="new-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#D2B62A] sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full justify-center rounded-md bg-[#D2B62A] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#FCD724] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                                >
                                    {loading ? 'Creating account...' : 'Sign up'}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold text-[#D2B62A] hover:text-[#FCD724]">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </>
    )
}

export default SignUp