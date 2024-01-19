import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    


    const onSubmit = data => {
        console.log(data)
        console.log(image_hosting_token);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/dashboard/manageitems')
                    }
                })
            }
        })
    };

    return (
        <div>
            <div className='flex flex-col items-center pb-5'>
                <p className='text-[#d72320] text-center italic border-b-2 md:w-4/12'>---Something new here?---</p>

                <h1 className='text-3xl text-center uppercase border-b-2 py-4 md:w-4/12'>ADD AN ITEM</h1>
            </div>

            <div className='p-10 lg:w-10/12 lg:mx-auto mx-5 rounded-md bg-[#2d2d2d] text-white'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5'>
                    <div className='space-y-1'>
                        <label htmlFor="">Item Name <span className='text-red-600'>*</span></label>
                        <input {...register("name", { required: true })} className='border w-full bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="text" name='name' placeholder='Item Name' required />
                    </div>

                    <div className='grid lg:grid-cols-2 gap-5 items-center'>
                        <div className='space-y-1 grid'>
                            <label htmlFor="">Category <span className='text-red-600'>*</span></label>
                            <select {...register("category", { required: true })} className='border text-slate-500 w-full bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="text" name='category' placeholder='Email' required >
                                <option disabled>Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className='space-y-1 grid'>
                            <label htmlFor="">Price <span className='text-red-600'>*</span></label>
                            <input {...register("price", { required: true })} className='border bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' type="number" name='price' placeholder='Price' required />
                        </div>
                    </div>

                    <div className='space-y-1 grid'>
                        <label htmlFor="">Item Detail <span className='text-red-600'>*</span></label>
                        <textarea {...register("recipe", { required: true })} className='border bg-transparent rounded shadow-md py-3 px-4 focus:outline-none focus:border-[#d72320] focus:ring-[#d72320]' name="recipe" placeholder='Item Detail' id="" cols="30" rows="5"></textarea>
                    </div>

                    <div>
                        <input {...register("image", { required: true })} name='image' type="file" className="file-input w-full bg-transparent max-w-xs" />
                    </div>

                    <div className='flex justify-center items-center w-52 mx-auto gap-3 pt-2 text-center rounded py-2 md:py-3 cursor-pointer shadow-xl hover:shadow-lg text-white font-bold bg-gradient-to-r from-[#d72320] to-[#ae312e] hover:bg-gradient-to-r hover:from-[#ae312e] hover:to-[#d72320]' style={{ transition: '.4s' }}>
                        <input className='flex justify-center' type="submit" value="Add Item" /> <FaUtensils />
                        <ToastContainer />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddItem;