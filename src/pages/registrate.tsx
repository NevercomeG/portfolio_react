import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting with email: ${email} and password: ${password}`);
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <form
        className='rounded-lg bg-white p-6 shadow-md'
        onSubmit={handleSubmit}
      >
        <h1 className='mb-4 text-xl font-bold'>Sign Up</h1>
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block font-bold text-gray-700'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='mb-2 block font-bold text-gray-700'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full rounded border border-gray-300 py-2 px-3 leading-tight text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
