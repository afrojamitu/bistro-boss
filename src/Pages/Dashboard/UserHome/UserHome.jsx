import useAuth from "../../../Hooks/useAuth";
import useMenu from "../../../Hooks/useMenu";
import useCart from "../../../Hooks/useCart";
import { FaShoppingCart, FaUtensils } from "react-icons/fa";
import banner from '../../../assets/user-dashboard.jpg'
import { Helmet } from "react-helmet";



const userHome = () => {
    const { user } = useAuth();
    const [menu] = useMenu()
    const [cart] = useCart()



    return (
        <div className="w-full">
            <Helmet>
                <title>Dashboard - Userhome</title>
            </Helmet>
            <h2 className="text-3xl">Hi, {user.displayName}</h2>

            <div className="grid lg:grid-cols-2 gap-10 my-8">
                <div className="flex items-center justify-center text-white gap-3 bg-gray-500 rounded-lg py-8 font-bold">
                    <div>
                        <FaUtensils className="text-4xl text-red-600"/>
                    </div>
                    <div>
                        <div className="text-4xl">{menu.length}</div>
                        <div className="text-2xl">Menu</div>
                    </div>
                </div>
                <div className="flex items-center justify-center rounded-lg text-white gap-3 bg-slate-500 py-8">
                    <div>
                        <FaShoppingCart className="text-4xl text-red-600"/>
                    </div>
                    <div>
                        <div className="text-4xl">My Cart</div>
                        <div className="text-2xl">{cart.length}</div>
                    </div>
                </div>
            </div>

            
            <div>
                <img src={banner} alt="" />
            </div>

        </div>
    );
};

export default userHome;