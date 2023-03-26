import Layout from 'components/layout';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Contact as ContactType } from 'types';
import { submitContactForm } from 'utils/api';
import { validate } from 'utils/validators';

export default function Contact() {
  const [formFields, setFormFields] = useState<ContactType>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  const errors = validate(touched, formFields);

  const formChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormFields(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    submitContactForm(formFields);
  };

  const onBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched(prev => ({
      ...prev,
      [event.target.name]: true
    }));
  };

  return (
    <Layout title='Contact'>
      <section className='mt-10 md:mt-24'>
        <div className='mx-auto w-full px-4 sm:w-2/3 sm:px-0 md:w-1/2'>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            onSubmit={submitForm}
          >
            <div className='mb-4'>
              <label
                htmlFor='name'
                className={`mb-1 block text-lg ${
                  errors.name ? 'text-red-500' : 'text-[#A2A1A1]'
                }`}
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                className={`w-full rounded border p-4 ${
                  errors.name ? 'border-red-500' : 'border-transparent'
                }`}
                onChange={formChange}
                onBlur={onBlur}
              />
              {errors.name && <p className='text-red-500'>{errors.name}</p>}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className={`mb-1 block  text-lg ${
                  errors.email ? 'text-red-500' : 'text-[#A2A1A1]'
                }`}
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your Email'
                className={`w-full rounded border p-4 ${
                  errors.email ? 'border-red-500' : 'border-transparent'
                }`}
                onChange={formChange}
                onBlur={onBlur}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='subject'
                className={`mb-1 block text-lg ${
                  errors.subject ? 'text-red-500' : 'text-[#A2A1A1]'
                }`}
              >
                Subject
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Subject'
                className={`w-full rounded border p-4 ${
                  errors.subject ? 'border-red-500' : 'border-transparent'
                }`}
                onChange={formChange}
                onBlur={onBlur}
              />
              {errors.subject && (
                <p className='text-red-500'>{errors.subject}</p>
              )}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className={`mb-1 block text-lg ${
                  errors.message ? 'text-red-500' : 'text-[#A2A1A1]'
                }`}
              >
                Body
              </label>
              <textarea
                name='message'
                id='message'
                placeholder='Your Message'
                className={`h-60 w-full rounded border p-4 ${
                  errors.message ? 'border-red-500' : 'border-transparent'
                }`}
                onChange={formChange}
                onBlur={onBlur}
              />
              {errors.message && (
                <p className='text-red-500'>{errors.message}</p>
              )}
            </div>
            <div>
              <button
                type='submit'
                className='w-40 rounded bg-primary p-2 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-[#2330a3]'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
