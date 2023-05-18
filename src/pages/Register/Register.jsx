import { Link } from 'react-router-dom';
import logo from '../../assets/logo3.png'
import { ImGoogle2 } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";

const Register = () => {
    return (
        <div className="md:my-10 w-auto mx-auto">
            <div className="flex min-h-full flex-1 flex-col  shadow-xl md:w-[550px] md:mx-auto md:bg-slate-100 justify-center  px-6 py-12 lg:px-8 h-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-14 w-14"
                        src={logo}
                        alt="Your Company"
                    />
                    <h3 className='text-center font-bold'>Toy Car Central</h3>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create a new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">


                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                              Your Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder='Enter Your Full Name'
                                    required
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder='Enter your Email Address'
                                    autoComplete="email"
                                    required
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                               Photo URL
                            </label>
                            <div className="mt-2">
                                <input
                                    id="photo-url"
                                    name="photo"
                                    type="text"
                                    autoComplete="photo"
                                    required
                                    placeholder='Phot URL'
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
                                    placeholder='Enter Your Password'
                                    autoComplete="current-password"
                                    required
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                   Confirm Password
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm password"
                                    name="confirm password"
                                    type="password"
                                    placeholder='Confirm Your Password'
                                    autoComplete="confirm password"
                                    required
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="text-sm text-end mt-2">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>





                    </form>
                    <div className='text-center mb-5 mt-5 md:flex md:gap-2 '>

                        <button className='btn btn-outline btn-primary mb-4 btn-sm'><ImGoogle2 className='text-xl mr-2 text-white'></ImGoogle2> Login with Googole</button>
                        <button className='btn btn-outline btn-primary  btn-sm'><GoMarkGithub className='text-xl mr-2 text-white'></GoMarkGithub> Login with GitHub</button>
                    </div>
                    <hr />
                    <p className="mt-10 text-center text-sm text-gray-500">
                    Already Have an account?{' '}
                        <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;