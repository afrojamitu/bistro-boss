import React from 'react';
import { Helmet } from 'react-helmet';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart()

    const total = cart?.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (item) => {
        // console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-o244c0x94-afrojamitu.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>MyCart - Bistro Boss Restaurant</title>
            </Helmet>

            <div className='flex flex-col items-center pb-5'>
                <p className='text-[#d72320] text-center italic border-b-2 md:w-4/12'>---Wanna Add More?---</p>

                <h1 className='text-3xl text-center uppercase border-b-2 py-4 md:w-4/12'>YOUR FOOD CART</h1>
            </div>
            <div className='flex items-center justify-between h-20'>
                <h1 className='text-xl font-bold uppercase'>Total Food Added : {cart.length}</h1>
                <h1 className='text-xl font-bold uppercase'>Total price : {total}</h1>
                <div>
                    <Link to='/dashboard/payment' className='px-6 py-1 rounded text-white font-bold bg-[#d72320] hover:bg-opacity-70' style={{ transition: '.5s' }}>Pay</Link>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-[#d72320]'>
                        <tr>
                            <th></th>
                            <th>Food</th>
                            <th>Food Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask  w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className='px-2 py-2 rounded text-white font-bold bg-red-700 hover:bg-opacity-70' style={{ transition: '.5s' }}><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;