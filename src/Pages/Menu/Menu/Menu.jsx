import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import bgCover from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className='bg-black bg-opacity-90 text-white'>
            <Helmet>
                <title>Our Menu - Bistro Boss Restaurant</title>
            </Helmet>
            <Cover
                image={bgCover} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}
            ></Cover>
            {/* offered items */}
            <div className='mt-10 '>
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    mainHeading={"TODAY'S OFFER"}
                ></SectionTitle>

                <MenuCategory items={offered}></MenuCategory>
            </div>
            {/* dessert item */}
            <div className='py-10'>
                <MenuCategory
                    items={dessert}
                    title={'Desserts'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    bgCover={dessertImg}
                ></MenuCategory>
            </div>
            {/* pizza item */}
            <div className='py-10'>
                <MenuCategory
                    items={pizza}
                    title={'Pizza'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    bgCover={pizzaImg}
                ></MenuCategory>
            </div>
            {/* salad item */}
            <div className='py-10'>
                <MenuCategory
                    items={salad}
                    title={'Salad'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    bgCover={saladImg}
                ></MenuCategory>
            </div>
            {/* soup item */}
            <div className='py-10'>
                <MenuCategory
                    items={soup}
                    title={'Soup'}
                    subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    bgCover={soupImg}
                ></MenuCategory>

            </div>
        </div>
    );
};

export default Menu;