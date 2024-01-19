import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const MenuCategory = ({ items, bgCover, title, subTitle }) => {
    return (
        <div>
            {title && <Cover
                image={bgCover} title={title} subTitle={subTitle}
            ></Cover>}
            <div className='grid md:grid-cols-2 items-center gap-5 md:w-10/12 md:mx-auto mx-5 my-10'>

                {
                    items.slice(0, 10).map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            <Link to={`/order/${title?.toLowerCase()}`}>
                <Button btnText={'ORDER YOUR FAVOURITE FOOD'}></Button>
            </Link>
        </div>
    );
};

export default MenuCategory;