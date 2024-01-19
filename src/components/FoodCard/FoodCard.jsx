import React, { useContext } from 'react';
import Button2 from '../Button/Button2';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const {user} = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item => {
        // console.log('Poduct Added', item);
        if(user){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('https://bistro-boss-server-o244c0x94-afrojamitu.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        title: 'Added to Cart',
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
        else{
            Swal.fire({
                title: 'Please login to order food!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className='bg-[#F3F3F3] space-y-3 pb-8 relative rounded-lg'>
            <img className='h-52 rounded-t-lg w-full' src={image} alt="" />
            <p className='absolute top-2 right-5 bg-slate-900 w-16 h-8 rounded text-white flex items-center justify-center'>${price}</p>
            <h1 className="text-2xl font-semibold text-center">{name}</h1>
            <p className='text-center px-3 pb-8'>{recipe}</p>

            <div className='absolute bottom-3 left-[117px] my-5'>
                <div className='text-center mt-3'>
                    <button onClick={() => handleAddToCart(item)} className='px-3 py-1 border-b-4  bg-[#615f5f] hover:bg-slate-500 border-[#d72320] rounded-lg text-lg font-semibold text-white' style={{ transition: '0.5s' }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;