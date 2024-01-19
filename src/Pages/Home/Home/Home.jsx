import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../OrderOnline/OrderOnline';
import BistroBio from '../BistroBio/BistroBio';
import PopularMenu from '../PopularMenu/PopularMenu';
import CellNoSection from '../CellNoSection/CellNoSection';
import ChefRecommendation from '../ChefRecommendation/ChefRecommendation';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div className='bg-black bg-opacity-90 text-white'>
            <Helmet>
                <title>Home - Bistro Boss Restaurant</title>
            </Helmet>

            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroBio></BistroBio>
            <PopularMenu></PopularMenu>
            <CellNoSection></CellNoSection>
            <ChefRecommendation></ChefRecommendation>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;