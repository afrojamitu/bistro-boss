import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';
import Button from '../../../components/Button/Button';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'salad')
    return (
        <div className='lg:w-10/12 mx-5 lg:mx-auto mb-10'>
            <SectionTitle
                subHeading={'---Check it out---'}
                mainHeading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className='grid lg:grid-cols-2 items-center gap-10 mb-16'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            {/* <Button btnText={'View Full Menu'}></Button> */}
        </div>
    );
};

export default PopularMenu;