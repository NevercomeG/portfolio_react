import type { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import Button from '@/components/global/buttons/Button';

type FormData = {
  from_name: string;
  username: string;
  subject: string;
  name: string;
  email: string;
  message: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState('');
  const userName = useWatch({ control, name: 'name', defaultValue: 'Someone' });

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    const api = 'http://localhost:8200/users/login' ?? '';
    await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        if (response.status === 200) {
          const json = await response.json();
          const token = json.accessToken;

          sessionStorage.setItem('token', token);
          setIsSuccess(true);
          setMessage(' ');
          if (e) {
            e.target.reset();
          }
          reset();
          setTimeout(() => {
            Router.push('/dashboard');
          }, 5000);
        } else {
          setIsSuccess(false);
          setMessage(' ');
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage(
          `Client Error. Please check the console.log for more info ${error}`
        );
      });
  };

  return (
    <section className='h-screen bg-[#131313]'>
      <div className=' h-full '>
        <div className='g-6 flex h-full flex-col flex-wrap items-center justify-center'>
          <div className='rounded-full bg-[#070707]'>
            <Image
              src='/assets/img/logo.png'
              className='w-full'
              alt=''
              width={100}
              height={150}
            />
          </div>
          <div className='mt-6 rounded-lg p-4 md:w-8/12 lg:w-[20%]'>
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input
                  type='hidden'
                  value={`${userName} sent a message from your Portfolio page`}
                  {...register('subject')}
                />
                <input
                  type='hidden'
                  value='Portfolio Page'
                  {...register('from_name')}
                />
                <div className='data-te-input-wrapper-init relative mb-6'>
                  <label htmlFor='full_name' className='mb-2'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='full_name'
                    placeholder='Username'
                    {...register('username', {
                      required: 'Full name is required',
                      maxLength: 80,
                    })}
                    className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent bg-white px-3 py-[0.32rem] leading-[2.15] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  ${
                      errors.username
                        ? 'border-red-600 ring-red-100 focus:border-red-600'
                        : 'border-gray-300 ring-indigo-100 focus:border-indigo-600'
                    }`}
                  />

                  {errors.username && (
                    <div className='invalid-feedback text-red-400 mt-1 text-sm'>
                      {/* <p>{errors.Username.message}</p> */}
                    </div>
                  )}
                </div>

                <div className='data-te-input-wrapper-ini relative mb-6'>
                  <label htmlFor='password' className='mb-2'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    {...register('password', {
                      required: 'Enter your password',
                      // pattern: {
                      //   value: /^\S+@\S+$/i,
                      //   message: 'Please enter a valid password',
                      // },
                    })}
                    placeholder='Password'
                    className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent bg-white px-3 py-[0.32rem] leading-[2.15] text-black    ${
                      errors.password
                        ? 'border-red-600 ring-red-100 focus:border-red-600'
                        : 'border-gray-300 ring-indigo-100 focus:border-indigo-600'
                    }`}
                  />

                  {errors.password && (
                    <div className='invalid-feedback text-red-400 mt-1 text-sm'>
                      {/* {errors.password.message} */}
                    </div>
                  )}
                </div>

                <div className='mb-6 flex flex-col items-center justify-between'>
                  <div className='mb-[0.125rem] flex min-h-[1.5rem] flex-row pl-[1.5rem]'>
                    <input
                      className="checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600"
                      type='checkbox'
                      value=''
                      id='exampleCheck3'
                      checked
                    />
                    <label
                      className='inline-block pl-[0.15rem] hover:cursor-pointer'
                      htmlFor='exampleCheck3'
                    >
                      Remember me
                    </label>
                    <a
                      href='#!'
                      className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <Button
                  type='submit'
                  className='bg-primary inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  {isSubmitting ? (
                    <svg
                      className='mx-auto h-5 w-5 animate-spin text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  ) : (
                    'Log In'
                  )}
                </Button>

                <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
                  <p className='mx-4 mb-0 text-center font-semibold dark:text-neutral-200'>
                    OR
                  </p>
                </div>

                <a
                  className='mb-3 flex w-full items-center justify-center rounded bg-white px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:text-white hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  // style='background-color: #3b5998'
                  href='#!'
                  role='button'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    viewBox='0 0 35 35'
                    className='mr-2 h-5 w-5'
                  >
                    <path d='M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z'></path>
                  </svg>
                  Continue with Google
                </a>

                <a
                  href='https://nevercomex.com'
                  className=' text-gray-100'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p className='text-center text-xs' id='result'>
                    NevercomeX
                  </p>
                </a>
              </form>
            )}
            {isSubmitSuccessful && isSuccess && (
              <>
                <div className='flex h-full flex-col items-center justify-center rounded-md text-center text-white'>
                  <svg
                    width='60'
                    height='60'
                    className='text-green-300'
                    viewBox='0 0 100 100'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z'
                      stroke='currentColor'
                      strokeWidth='3'
                    />
                  </svg>
                  <h3 className='text-green-500 py-5 text-xl'>Login you in</h3>
                  <p className='text-gray-700 md:px-3'>{Message}</p>
                  {/* <button
                    className='mt-6 text-indigo-600 focus:outline-none'
                    onClick={() => reset()}
                  >
                    Go back
                  </button> */}
                </div>
              </>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className='flex h-full flex-col items-center justify-center rounded-md text-center text-white'>
                <svg
                  width='60'
                  height='60'
                  viewBox='0 0 97 97'
                  className='text-red-400'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z'
                    stroke='CurrentColor'
                    strokeWidth='3'
                  />
                </svg>
                <h3 className='text-red-400 py-7 text-xl'>
                  Oops, Something went wrong!
                </h3>
                <p className='text-gray-700 md:px-3'>{Message}</p>
                <button
                  className='mt-6 text-indigo-600 focus:outline-none'
                  onClick={() => reset()}
                >
                  Go back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
