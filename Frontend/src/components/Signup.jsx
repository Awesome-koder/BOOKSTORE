import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const location = uselocation()
    const navigate = useNavigate()
    const from  = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) =>{
        const userInfo={
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success("! Signup Successfull !");
                Navigate(from ,{replace:true});
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((error)=>{
            if(error.response){
                toast.error("Error: ",error.response.data.message);
                console.log(error);
            }
        });
    };
    return (
        <>
            <div className='flex w-full h-screen items-center justify-center'>
                <div>
                    <div className="w-full px-16 modal-box dark:bg-cyan-950 dark:text-stone-300 outline">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg text-center">!! SIGN UP !!</h3>
                            {/* name field  */}
                            <div className='mt-4 space-y-2 '>
                                <span>Name: </span> <br />
                                <input type='text' placeholder='Enter Your name' {...register("fullname", { required: true })} className='h-10 w-full grow py-1 bg-gray-200 px-3 rounded-md outline-none dark:bg-cyan-900 dark:text-stone-300' required></input>
                            </div>
                            {/* e-mail field  */}
                            <div className='mt-4 space-y-2 '>
                                <span>Email: </span> <br />
                                <input type='email' placeholder='Enter Your Email' {...register("email", { required: true })} className='h-10 w-full grow py-1 bg-gray-200 px-3 rounded-md outline-none dark:bg-cyan-900 dark:text-stone-300' required></input>
                            </div>
                            {/* password field  */}
                            <div className='mt-4 space-y-2 '>
                                <span>Password: </span> <br />
                                <input type='password' placeholder='Enter Your Password' {...register("password", { required: true })} className='h-10 w-full grow py-1 bg-gray-200 mb-1 px-3 outline-none rounded-md dark:bg-cyan-900 dark:text-stone-300' required></input><br />
                            </div>
                            {/* confirm password field  */}
                            <div className='mt-4 space-y-2 '>
                                <span>Confirm Password: </span> <br />
                                <input type='password' placeholder='Enter Your Password' {...register("password", { required: true })} className='h-10 w-full grow py-1 bg-gray-200 mb-1 px-3 outline-none rounded-md dark:bg-cyan-900 dark:text-stone-300' required></input><br />
                            </div>
                            <div>
                                <p className="w-full justify-center align-center text-center mt-1">already have an account? <button className='text-pink-600 hover:text-pink-800' onClick={() => document.getElementById("my_modal_5").showModal()}>login now</button><Login /></p><br />
                                <input type='submit' className='btn btn-ghost w-full bg-pink-600 text-white hover:bg-sky-600' text="SIGN UP"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
