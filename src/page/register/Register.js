import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { SiNamecheap } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section>
      <div className="min-h-[89vh] bg-gradient-to-bl from-indigo-500 via-purple-500 to-cyan-500 flex items-center">
        <div className="max-w-lg mx-auto bg-white">
          <div className="w-full shadow-2xl bg-base-100 card-body ">
            <form className='p-8'>
              <p className='text-center font-bold text-3xl my-3'>Register</p>
              <div>
                <label className="label pb-0">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <div>
                  <SiNamecheap className='inline-block text-lg font-medium' />
                  <input type="text" name="name" placeholder="Full Name" className="p-3 border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg" />
                </div>
              </div>
              <div>
                <label className="label pb-0">
                  <span className="label-text text-lg font-semibold"> Email</span>
                </label>
                <div>
                  <AiOutlineMail className='inline-block text-lg font-medium' />
                  <input type="email" name="Email" placeholder="email" className="p-3 border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg" />
                </div>
              </div>
              <div className="form-control">
                <label className="label pb-0">
                  <span className="label-text text-lg font-semibold">Password</span>
                </label>
                <div>
                  <RiLockPasswordLine className='inline-block text-lg font-medium' />
                  <input type="password" placeholder="Password" name='password' className="p-3 border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg" />
                </div>
                <label className="labelt">
                  <Link to="/login" className="label-text-alt link link-hover block text-right  font-medium text-[16px] pt-2 opacity-80">already have account?</Link>
                </label>
              </div>
              <div className="form-control">
                <button className="text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-green-500 p-3 mt-2 w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;