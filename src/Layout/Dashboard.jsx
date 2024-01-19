import React, { useContext } from 'react';
import { FaBlenderPhone, FaBook, FaCalendarDay, FaHome, FaListUl, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AiFillMessage, AiFillShopping, AiOutlineMenu } from "react-icons/ai";
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
import logo from '../assets/icon/logo.png'

const Dashboard = () => {
    const [cart] = useCart()
    // const {user} = useContext()

    // TODO: check users if they are admin or not.
    // const isAdmin = true;

    const [isAdmin] = useAdmin()

    return (
        <div className="drawer-mobile drawer lg:drawer-open bg-slate-200">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-10 w-full">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-[100vh] rounded-0 bg-[#2d2d2d] text-white">
                    {/* Sidebar content here */}
                    <span className='p-4 mb-3'><img src={logo} alt="" /></span>
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'> <FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/additem'> <FaUtensils /> Add an Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'> <FaListUl />Manage Items</NavLink></li>
                            {/* <li><NavLink to='/dashboard/paymenthistory'> <FaBook />Manage Bookings</NavLink></li> */}
                            <li><NavLink to='/dashboard/allusers'> <FaUsers />All User</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/userhome'> <FaHome /> User Home</NavLink></li>
                                {/* <li><NavLink to='/dashboard/reservation'> <FaCalendarDay /> Reservation</NavLink></li> */}
                                <li><NavLink to='/dashboard/payment'> <FaWallet /> Payment </NavLink></li>
                                <li><NavLink to='/dashboard/mycart'> <FaShoppingCart /> My Cart <span className="badge badge-secondary">{cart?.length || 0}</span></NavLink>

                                </li>
                                {/* <li><NavLink to='/dashboard/review'> <AiFillMessage /> Add Review</NavLink></li> */}
                            </>
                    }

                    <li className="border-t-2 border-white"></li>

                    <li><NavLink to='/'> <FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'> <AiOutlineMenu /> Menu</NavLink></li>
                    <li><NavLink to='/orders'> <AiFillShopping /> Shop</NavLink></li>
                    <li><NavLink to='/contact'> <FaBlenderPhone /> Contact</NavLink></li>
                </ul>

            </div >
        </div >
    );
};

export default Dashboard;