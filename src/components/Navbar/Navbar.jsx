import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../CartComponent/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left flex gap-4'>
          <div className='item'>
            <img src="../../../public/img/france (2).png" alt="Flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>EUR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Livingroom
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Bedroom
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Others
            </Link>
          </div>
        </div>

        <div className='center text-2xl font-semibold tracking-wide'>
          <Link className='link' to='/'>
            ILIAMI
          </Link>
        </div>

        <div className='right flex gap-4 items-center'>
          <div className=''>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>

          <div className='icons flex gap-4 text-gray-400 cursor-pointer'>
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlined />

            {/* Hamburger menu icon */}
            <div className='lg:hidden' onClick={toggleNavbar}>
              <div className='hamburger-icon'>
                <div className={`bar ${open ? 'active' : ''}`}></div>
                <div className={`bar ${open ? 'active' : ''}`}></div>
                <div className={`bar ${open ? 'active' : ''}`}></div>
              </div>
            </div>

            <div className='cartIcon relative' onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span className='badge'>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
