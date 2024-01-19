import React, { useContext } from 'react';
import facebook from '../../../assets/others/fb-logo.png'
import google from '../../../assets/others/google-logo.png'
import github from '../../../assets/others/github-logo.png'
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://bistro-boss-server-o244c0x94-afrojamitu.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className='flex items-center justify-center gap-5'>
            {/* <button><img className='w-6' src={facebook} alt="" /></button> */}
            <button onClick={handleGoogleSignIn}><img className='w-6' src={google} alt="" /></button>
            {/* <button><img className='w-8' src={github} alt="" /></button> */}
        </div>
    );
};

export default SocialLogin;