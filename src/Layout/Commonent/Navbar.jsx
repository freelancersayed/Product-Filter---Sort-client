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
        <div className='flex lg:py-4 pt-6 pb-4 bg-orange-500 text-center text-black fixed w-full'>
       <div className='w-full'>
       <FilterSearch setSearch={setSearch}></FilterSearch>
       </div>

     {
        !user ?    <div className='w-44 flex gap-6 text-white'>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">SING UP</Link>
    </div>:
    <div className='flex items-center w-52 gap-7 text-white'>
    <p className=' font-bold'>{user?.displayName}</p>
    <button className='hover:underline' onClick={handleLogout}>LogOut</button>
    </div>
     }

    
        </div>
    );
};

export default Navbar;