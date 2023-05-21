import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from '../../../assets/logo3.png'



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handlerLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = <>
        <li className="font-bold"><ActiveLink to='/'>Home</ActiveLink></li>
        <li className="font-bold"><ActiveLink to='/allToy'>All Cars</ActiveLink></li>
        {user &&
            <>
                <li className="font-bold"><ActiveLink to='/myCars'>My Cars</ActiveLink></li>
                <li className="font-bold"><ActiveLink to='/addToy'>Add toys</ActiveLink></li>
            </>
        }
        <li className="font-bold"><ActiveLink to='/blog'>Blog</ActiveLink></li>

    </>
    return (
        <div className="navbar bg-slate-100 shadow-md px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <div className="flex items-center">
                    <img className="h-10 w-10 mr-2" src={logo} alt="" />
                    <Link to='/' className=" normal-case font-bold sm:text-sm md:text-2xl md:block text-primary">Carville</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>



            <div className="navbar-end">

                {user &&
                    <div>
                        <img className='rounded-full w-10 h-10 me-2' data-toggle="tooltip" data-placement="left" title={user?.displayName} src={user?.photoURL} alt="" />
                    </div>



                }

                {user ?
                    <button onClick={handlerLogOut} className="btn btn-active btn-sm btn-primary ">LogOut</button> :

                    <div>
                        <Link to='/login'> <button className="btn btn-active btn-sm btn-primary mr-2">Login</button></Link>
                        <Link to='/register'> <button className="btn btn-outline btn-sm btn-primary">Register</button></Link>
                    </div>

                }
            </div>
        </div>
    );
};

export default Navbar;