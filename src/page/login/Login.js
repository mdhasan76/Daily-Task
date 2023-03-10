import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { AuthContext } from '../../route/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const { googleLogIn, logInUser } = useContext(AuthContext);
    const [error, setError] = useState("")

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    //handle login
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(res => {
                toast.success("Login sucessful");
            })
            .catch(err => setError(err.message))
    }

    //google login 
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                toast.success("Log In sucessFul");
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <section>
            <div className="min-h-[89vh] bg-gradient-to-bl from-indigo-500 via-purple-500 to-cyan-500 flex items-center">
                <div className="max-w-lg mx-auto bg-white">
                    <div className="w-full shadow-2xl bg-base-100 card-body ">
                        <form className='p-8' onSubmit={handleLogIn}>
                            <div>
                                <label className="label pb-0">
                                    <span className="label-text text-lg font-semibold"> Email</span>
                                </label>
                                <div>
                                    <AiOutlineMail className='inline-block text-lg font-medium' />
                                    <input type="email" name="email" placeholder="email" className="p-3 border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label pb-0">
                                    <span className="label-text text-lg font-semibold">Password</span>
                                </label>
                                <div>
                                    <RiLockPasswordLine className='inline-block text-lg font-medium' />
                                    <input type="password" placeholder="Password" name='password' className="p-3 border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg mb-2" required />
                                </div>
                                {/* <label className="labelt">
                                    <Link to="/" className="label-text-alt link link-hover block text-right  font-medium text-[16px] pt-2 opacity-80">Forgot password?</Link>
                                </label> */}
                            </div>
                            {
                                <p className='text-red-500 text-xs py-3'>{error}</p>
                            }
                            <div className="form-control">
                                <button className="text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-green-500 p-3 mt-2 w-full">Login</button>
                            </div>
                        </form>
                        <div className="text-center font-bold my-3">OR</div>
                        <div className='text-center'>
                            <button onClick={handleGoogleLogIn} className='bg-slate-300 p-3 rounded-full'><FcGoogle className=' text-3xl w-full' /></button>
                        </div>

                        <p className='block text-center text-sm label opacity-80 py-3'>new to Daily Task?
                            <Link to='/register' className='text-lg font-medium inline text-left hover:border-b hover:border-indigo-600'> register now</Link> </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;