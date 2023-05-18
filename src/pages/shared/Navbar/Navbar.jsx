import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";


const Navbar = () => {
    const navItems = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/allToys'>All Toys</ActiveLink></li>
        <li><ActiveLink to='/myToys'>My Toys</ActiveLink></li>
        <li><ActiveLink to='/addToys'>Add toys</ActiveLink></li>
        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
    </>
    return (
        <div className="navbar bg-slate-100 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Toy Car Central <img src="" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to='/login'> <button className="btn btn-active btn-sm btn-primary mr-5">Login</button></Link>
               <Link to='/register'> <button className="btn btn-outline btn-sm btn-primary">Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;