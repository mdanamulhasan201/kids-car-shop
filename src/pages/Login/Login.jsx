import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo3.png'
import { ImGoogle2 } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { FaArrowRight } from "react-icons/fa";

const Login = () => {


    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('')

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();



    // google login
    const handleGoogleSignIn = () => {
        setError('')

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                // toast.success("Logout Successfully!");
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // github login
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser)
                navigate(from, { replace: true })
                // setSuccess('User has been successfully login')

            })
            .catch(error => {
                setError(error.message)
            })
    }





    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="md:my-10 w-auto mx-auto">
            <div className="flex min-h-full flex-1 flex-col  shadow-xl md:w-[550px] md:mx-auto md:bg-slate-100 justify-center  px-6 py-12 lg:px-8 h-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-14 w-14"
                        src={logo}
                        alt="Your Company"
                    />
                    <h3 className='text-center font-bold'>Carville</h3>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Please login your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder='Enter your Email'
                                    required
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder='Enter Your Password'
                                    required
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="text-sm text-end mt-2">
                                <a className="font-semibold cursor-pointer hover:text-primary">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <p>{error}</p>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3FACB1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               <div className="flex items-center">
                                    <div className='mr-2'>
                                        <p>Login</p>
                                    </div>
                                    <FaArrowRight> </FaArrowRight>
                                </div>
                            </button>
                        </div>





                    </form>
                    <div className='text-center mb-5 mt-5 md:flex md:gap-2 '>

                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary mb-4 btn-sm'><ImGoogle2 className='text-xl mr-2 text-white'></ImGoogle2> Login with Googole</button>

                        <button onClick={handleGithubSignIn} className='btn btn-outline btn-primary  btn-sm'><GoMarkGithub className='text-xl mr-2 text-white'></GoMarkGithub> Login with GitHub</button>
                    </div>
                    <hr />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do not have an account? {' '}
                        <Link to='/register' className="font-semibold leading-6 hover:text-primary">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;