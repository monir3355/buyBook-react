import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerData = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Books',
      link: '/books'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Contact Us',
      link: '/contact'
    }
  ];
  
  return (
    <header className='flex justify-between items-center py-6 bg-slate-300 px-4'>
      <Link to="/" className='text-3xl font-semibold'>buyBooks</Link>
      <ul className='flex gap-4'>
        {
          headerData.map(data=> <Link className='font-semibold' to={data.link}>{data.title}</Link>)
        }
      </ul>
    </header>
  );
};

export default Header;