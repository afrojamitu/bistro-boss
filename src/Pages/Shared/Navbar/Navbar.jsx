import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import { useState } from 'react';
import './Navbar.css'
import useAdmin from '../../../Hooks/useAdmin';
import logo from '../../../assets/icon/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        if (window.scrollY >= 90) {
            setNavBg(true)
        }
        else {
            setNavBg(false);
        }
    }

    window.addEventListener('scroll', changeNavBg);

    const NavLinks = <>
        <Link to='/'>HOME</Link>
        <Link to='/menu'>MENU</Link>
        <Link to='/order/salad'>FOODS</Link>
        <Link to='/contact'>CONTACT</Link>
        {
            isAdmin ? <li><Link to="/dashboard/adminhome">DASHBOARD</Link></li> : 
            <li><Link to="/dashboard/userhome">DASHBOARD</Link></li>
        }
        <div className='flex gap-6 items-center'>
            {
                !isAdmin && <Link to='/dashboard/mycart' className="flex items-center relative">
                <FaShoppingCart className='text-2xl text-green-600' />
                <div className="badge badge-secondary absolute -top-3 -right-3">{cart?.length || 0}</div>
            </Link>
            }
            {user ? <>
                <div className="dropdown">
                <img tabIndex={0} className='w-10 h-10 bg-white rounded-full' src={user?.photoURL} alt="" />
                    {/* <label className="btn m-1">Click</label> */}
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-transparent border rounded w-32 -right-[45px]">
                        <li><button onClick={handleLogout} className='text-center border-b-2 rounded-md bg-[#d72320] px-3 py-1 hover:bg-slate-400' style={{ transition: '.5s' }}>SIGN OUT</button></li>
                    </ul>
                </div>
            </>
                : <Link to='/login' className='border-b-2 rounded-md bg-[#d72320] px-5 py-2 hover:bg-slate-400' style={{ transition: '.5s' }}>LOGIN</Link>}

        </div>

    </>

    return (
        <div>
            <div className={navBg ? "navbar py-3 fixed z-10 md:px-24 px-5 bg-[#191919] text-white" : "navbar py-3 fixed z-10 md:px-24 px-5 bg-transparent  text-white"} style={{ transition: '.6s' }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className='text-white ' style={{ fontFamily: 'Lato' }}>
                        <img className='w-52' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex text-white font-semibold gap-8 items-center">
                        {NavLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;