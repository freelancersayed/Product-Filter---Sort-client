import React, { useContext, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthContext } from '../../firebase/provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
 // Assuming firebase.js is already set up

const Register = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const {createUser, updateUserProfile, googleLogin,} = useContext(AuthContext)
  const naviget= useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    // const photo = form.get("url");
    const password = form.get("password");
    // const Accept = e.target.terms.checked;
    console.log(name, email, password);


    createUser(email, password,  name)
    .then((result)=>{
      console.log(result.user);
      updateUserProfile(name,).then(() => {
        console.log("Updated user profile");
      });

      naviget('/')
    })
    .catch((error)=>{
      console.log(error);
    })

  };

  const handleGoogleSign = () => {
    googleLogin()
      .then(() => {
        naviget(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
   <div className=' m-2 py-20 bg-gray-100'>
     <Helmet>
        <title>Register Page - Product-Nest Site</title>
        <meta name="description" content="This is the register page of product nest site." />
        <meta name="keywords" content="react, helmet, SEO, register" />
      </Helmet>
   <section className='max-w-[800px] mx-auto'>
  <div className='lg:flex justify-between'>
  <h1 className='text-3xl'>Create Your Product-Nest Account</h1>
  <p>Already Account? <Link to="/login" className='text-blue-500 underline cursor-pointer'>Login</Link> here</p>
  </div>
<div className="flex lg:flex-row flex-col-reverse mt-10 justify-center p-8 py-10 gap-10  shadow-md rounded-sm bg-white">
<div className="w-full flex items-end">
     <button
       onClick={handleGoogleSign}
       className="flex items-center justify-center py-4 w-full  text-white bg-red-500 rounded-sm hover:bg-red-600"
     >
       Sign in with Google
     </button>
   </div>

 <div className="w-full space-y-8 bg-white  rounded-md">

   <form onSubmit={handleRegister} className="space-y-4">
     <div>
       <label className="block text-sm font-medium text-gray-700">
         Name
       </label>
       <input
         type="text"
         required
         name='name'
         className="w-full px-3 py-2 mt-1 border rounded-sm focus:outline-none focus:ring focus:ring-indigo-200"
       />
     </div>
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
     <div className="flex justify-center mt-4 w-full border">
       <ReCAPTCHA
         sitekey="YOUR_RECAPTCHA_SITE_KEY"
         onChange={handleRecaptchaChange}
       />
     </div>

     <button
       type="submit"
       className="w-full py-4 mt-4  text-white bg-blue-600 rounded-sm hover:bg-blue-700"
     >
       Register
     </button>

   </form>

 </div>
</div>
   </section>
   </div>
  );
};

export default Register;
