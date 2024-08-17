import { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className='w-full mx-auto items-center justify-center flex'><span className="loading loading-bars loading-lg min-h-screen"></span></div>
    
    }
if(user){
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRout;