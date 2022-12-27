import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div class="min-h-screen flex justify-center items-center bg-white">
  <div class="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
    <div class="py-8">
      <p className='font-bold text-3xl text-center'>Create Account</p>
    </div>
    <input type="text" class="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Full Name" />
    <input type="email" class="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail" />
    <div class="flex flex-col space-y-1">
      <input type="password" class="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" />
      <p class="font-semibold text-xs">Already have account? <Link to="/login" className='hover:text-[#0070ba] hover:border-b'>login now </Link> </p>
    </div>
    <div class="flex flex-col space-y-5 w-full">
      <button class="w-full mt-3 bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Register</button>
    </div>
  </div>
</div>
    );
};

export default Register;