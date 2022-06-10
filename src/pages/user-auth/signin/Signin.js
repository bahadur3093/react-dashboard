import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { has } from 'lodash';

import './Signin.scss';

const Signin = () => {
  const {register, formState: { errors } ,handleSubmit} = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const [data, setData] = useState("");
  const onSubmit = (data) => {
    if(data.username === 'bahadur3093' && data.password === 'Welcome@3093') {
      console.info('Valid credentials');
    } else {
      console.error('Invalid credentials');
    }
  };
  return (
    <div className='signin-wrapper flex flex-col justify-center text-center'>
      <h2 className='w-full font-bold text-5xl'>Welcome</h2>
      <h3 className='w-full font-xl mb-4'>Sign in to continue!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4">
          <label htmlFor="username" className='hidden'>Your email or username</label>
          <input {...register("username", {
            required: 'Enter username or email',
            minLength: {
              value: 6,
              message: 'Enter a valid username or email'
            }
          })} 
          type="text" 
          name='username' 
          className='rounded-2xl h-16 w-full border-2 border-grey-100 bg-grey-50 hover:border-grey-900 active:border-grey-900 focus:border-grey-900 focus-visible:border-grey-900 leading-normal text-3xl px-3' 
          />
          <label className="block font-xs text-red-600 text-left pl-2 mt-1">
            <ErrorMessage errors={errors} name="username" />
          </label>
        </div>
        {/* Password input block */}
        <div className="w-full mb-4">
          <label htmlFor="password" className='hidden'>Password</label>
          <input {...register("password", {
            required: 'Enter password',
            minLength: {
              value: 6,
              message: 'Enter a valid password'
            }
          })} 
          type="password" 
          name='password' 
          className='rounded-2xl h-16 w-full border-2 border-grey-100 bg-grey-50 hover:border-grey-900 active:border-grey-900 focus:border-grey-900 focus-visible:border-grey-900 leading-normal text-3xl px-3' />
          <label className="block font-xs text-red-600 text-left pl-2 mt-1">
            <ErrorMessage errors={errors} name="password" />
          </label>
        </div>
        <div className="w-full">
          <input type="submit" value="Continue" className='rounded-2xl bg-yellow w-full h-16 cursor-pointer transition hover:ease-in-out hover:bg-black hover:text-white' />
        </div>
        {data}
      </form>
    </div>
  )
}

export default Signin