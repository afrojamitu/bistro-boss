import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'
import Button2 from '../../../components/Button/Button2';

const ChefRecommendation = () => {
    return (
        <div className='lg:w-10/12 mx-5 lg:mx-auto mb-10'>
            <SectionTitle
                subHeading={'---Should Try---'}
                mainHeading={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <div className='grid lg:grid-cols-3 gap-10 text-black'>
                {/* item 1 */}
                <div className='bg-[#F3F3F3] space-y-3 pb-5 rounded-lg'>
                    <img className='h-52 rounded-t-lg w-full' src={img1} alt="" />
                    <div className='p-5'>
                    <h1 className="text-xl text-center">Dessert</h1>
                    <p className='text-center'>Chocolate Syrup, Panecake, Strawberry, Yogurt, Lettuce</p>

                    <Button2 btnText={'Add to Cart'}></Button2>
                    </div>
                </div>
                {/* item 2 */}
                <div className='bg-[#F3F3F3] space-y-3 pb-5 rounded-lg'>
                    <img className='h-52 rounded-t-lg w-full' src={img2} alt="" />
                    <div className='p-5'>
                    <h1 className="text-xl text-center">Pizza</h1>
                    <p className='text-center'>Mashroom, Brocoli, Capcicum, Sausage, Tomato, pepperoni</p>

                    <Button2 btnText={'Add to Cart'}></Button2>
                    </div>
                </div>
                {/* item 3 */}
                <div className='bg-[#F3F3F3] space-y-3 pb-5 rounded-lg'>
                    <img className='h-52 rounded-t-lg w-full' src={img3} alt="" />
                    <div className='p-5'>
                    <h1 className="text-xl text-center">Soup</h1>
                    <p className='text-center'>Chicken, Corn, Tomato Sauce, Soya Sauce, Corriender, Yogurt</p>

                    <Button2 btnText={'Add to Cart'}></Button2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendation;