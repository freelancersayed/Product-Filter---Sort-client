import React, { useContext } from 'react';
import FilterSearch from '../../page/FilterSearch';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../firebase/provider/Authprovider';

const Navbar = ({setSearch}) => {

    const {user, logOut}=useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(result => {
          console.log('Logged out', result.user);
        })
        .catch(error => {
          console.log('Not logged out', error);
        });
    }

    return (
        <div className='lg:py-4 pt-6 pb-4 bg-orange-500 text-center text-black fixed w-full px-2'>
   <section className='flex max-w-[1280px] mx-auto items-center'>
   <div className='flex items-center'>
       <Link to="/">
       <img className='lg:w-52 md:28 w-36 lg:h-12 h-10 md:h-full  ' src="/product.png" alt="" />
       </Link>
       </div>

       <div className='lg:w-full md:w-3/4 w-full'>
       <FilterSearch setSearch={setSearch}></FilterSearch>
       </div>

     {
        !user ?    <div className='w-44 flex gap-6 text-white'>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">SING UP</Link>
    </div>:
    <div className='flex items-center lg:w-60 gap-7 text-white'>
    <p className=' font-bold hidden lg:block'>{user?.displayName}</p>
    <button className='hover:underline' onClick={handleLogout}>LogOut</button>
    </div>
     }

   </section>
    
        </div>
    );
};

export default Navbar;