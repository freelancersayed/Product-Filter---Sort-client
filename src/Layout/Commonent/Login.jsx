import React, { useContext } from 'react';
import { getAuth, } from 'firebase/auth';
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthContext } from '../../firebase/provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { app } from '../../firebase/firebase.config';
import { Helmet } from 'react-helmet';
 // Assuming firebase.js is already set up

const Login = () => {

  const auth = getAuth(app);
const {signIn, googleLogin} = useContext(AuthContext)
const navigate= useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    // const photo = form.get("url");
    const password = form.get("password");
    // const Accept = e.target.terms.checked;
    console.log( email, password);


    signIn(email, password,)
    .then((result)=>{
      console.log(result.user);
 
      navigate(from, { replace: true });
    })
    .catch((error)=>{
      console.log(error);
    })

  };

  const handleGoogleLogin = async () => {
    googleLogin()
    .then(() => {
      navigate(from, { replace: true });
      
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
   <div className=' m-2 py-20 bg-gray-100'>
     <Helmet>
        <title>Login Page - Product-Nest Site</title>
        <meta name="description" content="This is the login page of product nest site." />
        <meta name="keywords" content="react, helmet, SEO, login" />
      </Helmet>

   <section className='max-w-[800px] mx-auto text-gray-700'>
  <div className='flex justify-between '>
  <p>Already Account? <Link to="/register" className='text-blue-500 underline cursor-pointer'>Register</Link> here</p>
  </div>
<div className="mt-10 justify-center py-10 gap-10 lg:px-28 md:px-20 px-6  shadow-md rounded-sm bg-white">

<p className='mb-5 text-xl font-bold'>Login With Password</p>
 <div className="w-full space-y-8 bg-white  rounded-md">
   <form onSubmit={handleLogin} className="space-y-4">
     <div>
       <label className="block text-sm font-medium text-gray-700">
         Email
       </label>
       <input
         type="email"
         required
         name='email'
         className="w-full px-3 py-2 mt-1 border rounded-sm focus:outline-none focus:ring focus:ring-indigo-200"
       />
     </div>
     <div>
       <label className="block text-sm font-medium text-gray-700">
         Password
       </label>
       <input
         type="password"
         required
         name='password'
         className="w-full px-3 py-2 mt-1 border rounded-sm focus:outline-none focus:ring focus:ring-indigo-200"
       />
     </div>

     <button
       type="submit"
       className="w-full py-4 mt-4  text-white bg-orange-500 rounded-sm hover:bg-orange-600"
     >
       Login
     </button>
   </form>
 </div>

 <div className="divider text-gray-500 my-10">or login with</div>

 <div className="w-full flex gap-8 items-end ">
     <button
       onClick={handleGoogleLogin}
       className="flex-1 items-center btn justify-center py-4 w-full bg- border rounded-sm hover:bg-red-600"
     >
       Sign in with Facebook
     </button>
     <button
       onClick={handleGoogleLogin}
       className="flex-1 items-center btn justify-center py-4 w-full border rounded-sm hover:bg-red-600"
     >
       Sign in with Google
     </button>
   </div>

</div>
   </section>
   </div>
  );
};

export default Login;
