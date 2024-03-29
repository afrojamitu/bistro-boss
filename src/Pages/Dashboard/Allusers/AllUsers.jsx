import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()

    const {data: users = [], refetch} = useQuery(['/users'], async()=>{
        const res = await axiosSecure.get('/users')
        return res.data
    })

    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => res.data)
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    title: `${user.name} is an admin now!`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
        })
    }

    const handleDelete = (user) =>{
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
                fetch(`https://bistro-boss-server-o244c0x94-afrojamitu.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'This user has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>All Users - Bistro Boss Restaurant</title>
            </Helmet>
            {/* <SectionTitle subHeading={'---My Cart---'} mainHeading={'WANNA ADD MORE?'}></SectionTitle> */}
            <h3 className="text-2xl font-semibold mb-8">Total Users: {users.length}</h3>

            <div className="overflow-x-auto w-full rounded-lg border">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-[#D1A054]'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className='text-start' key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-start'>
                                    {
                                        user.role === 'admin'? 'Admin' : 
                                        <button onClick={() => handleMakeAdmin(user)} className='px-2 py-2 rounded text-white font-bold bg-[#2d2d2d] hover:bg-opacity-70' style={{ transition: '.5s' }}><FaUsers /></button>
                                    }
                                </td>
                                <td className='text-start'>
                                    <button onClick={() => handleDelete(user)} className='px-2 py-2 rounded text-white font-bold bg-red-700 hover:bg-opacity-70' style={{ transition: '.5s' }}><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;