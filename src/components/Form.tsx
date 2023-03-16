import axios from 'axios';
import React, { useState } from 'react';

import Button from '@/components/Global/buttons/Button';

import Container from '../container';
interface Props {
  heading: string;
  message: string;
}

const ContactForm = ({ heading, message }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAcceptedTerms(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent the default form submission behavior
    setIsLoading(true);

    // create a new user object with the form data

    try {
      const { status } = await axios.post(
        'http://localhost:8000/emailss',
        {
          name: name,
          lastName: lastName,
          email: email,
          country: country,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      if (status === 201) {
        setIsSuccess(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className='w-full '>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-xl'>{message}</p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(event);
          }}
        >
          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Nombre'
            type='text'
            id='first-name'
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Apellido'
            type='text'
            id='last-name'
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />
          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Email'
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className='my-2 min-h-[40px] w-2/3 max-w-full flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white py-2 px-4 align-middle text-lg leading-normal text-black'
            placeholder='Pais'
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <br />
          <br />
          <div className='flex w-full  flex-1 flex-col-reverse items-center justify-center py-10'>
            <input
              className='  min-h-[25px] min-w-[25px] flex-grow-[1] rounded-md border-[1px] border-[#212121] bg-white align-middle text-lg leading-normal'
              type='checkbox'
              id='terms'
              onChange={handleCheckboxChange}
              checked={acceptedTerms}
            />
            <label htmlFor='terms' className=' p-2'>
              Acepto la{' '}
              <span className='text-red-500'>
                <a href='' className='items-center justify-center'>
                  Política de Privacidad y Protección de Datos
                </a>
              </span>
            </label>
          </div>

          <Button
            type='submit'
            isLoading={isLoading}
            disabled={isLoading && !acceptedTerms}
            className={` rounded-md border border-[#212121] bg-[#c70039] ${
              isLoading ? '' : ''
            }px-8 py-2 text-center font-bold `}
          >
            {isLoading
              ? 'PLEASE WAIT'
              : isSuccess
              ? 'REGISTRO EXITOSO'
              : 'REGISTRATE COMPLETADO'}
          </Button>

          <div className='flex w-full items-center justify-center'>
            <p className='my-4 rounded-md px-8 py-2 font-bold text-green-300 lg:w-96'>
              {isSuccess && <p>Thank you for your submission!</p>}
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
