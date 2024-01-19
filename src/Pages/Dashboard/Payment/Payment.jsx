import React from 'react';
import useCart from '../../../Hooks/useCart';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Checkout from '../Checkout/Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { user } = useAuth()
    const [cart] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    
    return (
        <div>
            <Helmet>
                <title>Dashboard - Payment</title>
            </Helmet>
            <div className='grid space-x-5 p-5 text-base'>
                <div className='flex flex-col items-center'>
                    <p className='text-[#d72320] text-center italic border-b-2 md:w-4/12'>---Heres your products---</p>

                    <h1 className='text-3xl text-center uppercase border-b-2 pb-4 md:w-4/12'>CHECKOUT</h1>
                </div>
                <div className=' h-full rounded'>
                    <form className="text-slate-600 lg:w-9/12 lg:mx-auto">
                        <div className="grid md:grid-cols-1 divide-y border border-slate-300 p-8">
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Customer Name:</div>
                                <div className="px-4 py-2">
                                    {user?.displayName}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Email:</div>
                                <div className="px-4 py-2">
                                    {user?.email}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Contact:</div>
                                <div className="px-4 py-2">
                                    <input className='bg-transparent text-sm p-2 rounded border border-slate-300 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="text" placeholder='Contact no' required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Total Product:</div>
                                <div className="px-4 py-2">
                                    {cart.length}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Product list:</div>
                                <ul className="px-4 py-2">
                                    {cart.map(item => <li className='list-decimal ms-5' key={item._id}>{item.name}</li>)}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Amount to pay:</div>
                                <div className="px-4 py-2">
                                    $ {price}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div className="px-4 py-2 font-semibold">Address:</div>
                                <div className="px-4 py-2">
                                    <input className='bg-transparent text-sm p-2 rounded border border-slate-300 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="text" placeholder='Full Address' required />
                                </div>
                            </div>
                        </div>

                    </form>

                    <Elements stripe={stripePromise}>
                        <Checkout cart={cart} price={price}></Checkout>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;