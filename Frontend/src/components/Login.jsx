import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo={
      email: data.email,
      password: data.password,
  }
  await axios.post("http://localhost:4001/user/login",userInfo)
  .then((res)=>{
      console.log(res.data);
      if(res.data){
          toast.success("! Login Successfull !");
          document.getElementById("my_modal_5").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000)
      }
  }).catch((error)=>{
      if(error.response){
          toast.error("Error: ",error.response.data.message);
          setTimeout(() => {},2000);
          console.log(error);
      }
  });
  }
  return (
    <div>
      <dialog id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
        <div className="modal-box dark:bg-cyan-950 dark:text-stone-300 outline">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-ghost w-8 h-4 absolute right-3 top-3 hover:text-red-600 hover:rotate-90 duration-300 text-2xl font-extrabold" onClick={() => document.getElementById("my_modal_3").close()}>⨉</Link>
              <h3 className="font-bold text-lg text-center">!! Welcome Back !!</h3>
              {/* e-mail field  */}
              <div className='mt-4 space-y-2 '>
                <span>Email: </span> <br />
                <input type='email' placeholder='Enter Your Email' {...register("email", { required: true })} className='w-full grow py-1 bg-gray-200 px-3 rounded-md outline-none dark:bg-cyan-900 dark:text-stone-300'></input>
              </div>
              {/* password field  */}
              <div className='mt-4 space-y-2 '>
                <span>Password: </span> <br />
                <input type='password' placeholder='Enter Your Password' {...register("password", { required: true })} className='w-full grow py-1 bg-gray-200 mb-1 px-3 outline-none rounded-md dark:bg-cyan-900 dark:text-stone-300'></input><br />
                <span className='relative right-50 top-30'><a href="fogot.jsx" className="mt-1 text-blue-600 hover:text-blue-800">forgot password?</a></span>
              </div>
              <div>
                <p className="w-full justify-center align-center text-center mt-1">don't have an account?<Link to="/signup"><span className='text-pink-600 hover:text-pink-800'>register now</span></Link></p><br />
              </div>
              <button className='btn btn-ghost w-full bg-pink-600 text-white hover:bg-sky-600'>LOGIN</button>
            </form>
            </div>
      </dialog>
    </div>
  )
}

export default Login