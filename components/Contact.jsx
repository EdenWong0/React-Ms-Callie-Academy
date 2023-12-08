"use client";
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to server, etc.)
    console.log('Form submitted:', formData);
  };


  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        ✨CONTACT MISS CALLIE✨
        </h2>
        <p className='text-center text-gray-600'>Get in touch to find out more about learning with me!</p>
        <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='firstName' className='block text-sm font-medium text-gray-600'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='lastName' className='block text-sm font-medium text-gray-600'>
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-600'>
              Phone Number
            </label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-600'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='4'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 mt-4 text-white bg-primary rounded-md focus:outline-none hover:bg-opacity-90'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
