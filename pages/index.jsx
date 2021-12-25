import { useState } from 'react';


import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import { getFromLocalStorage, processNumber } from '@/helper';

export default function Home() {
  const [id, setId] = useState(
    () => getFromLocalStorage('countrycode') || '91'
  );
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleIdChange = (e) => {
    const newId = e.target.value.replace(/[^\d]/g, '');
    setId(newId);
    localStorage.setItem('countrycode', newId);
  };

  const link = `https://wa.me/${processNumber(number, id)}`;
  const link_btn = `Connect with ${processNumber(number, id)}`;

  return (
    <>
    
      <Seo />

      <main>
        <section className='bg-white dark:bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen pb-12 space-y-8 text-grey dark:text-white layout'>
            <div className='flex flex-col space-y-2 text-center text-grey'>
              <h1>WhatsApp Helper</h1>
              <p>A helper to avoid saving number to your contacts.</p>
              <div>
                <p className='text-sm text-gray-500'>
                  This site does not collect any personal information.{' '}
                  <br className='hidden md:block' />
                  Feel free to check out the{' '}
                  <CustomLink href='https://github.com/vaibhavr2107'>
                    repository
                  </CustomLink>{' '}
                  and self-host.
                </p>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-sm font-bold' htmlFor='id'>
                Country code:
              </label>
              <input
                className='border-gray-600 rounded-lg bg-white dark:bg-dark focus:ring-primary-400'
                value={id}
                name='id'
                onChange={handleIdChange}
                type='text'
                pattern='\d*'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-sm font-bold' htmlFor='number'>
                Input your number:
              </label>
              <input
                className='border-gray-600 rounded-lg bg-white dark:bg-dark focus:ring-primary-400'
                value={number}
                name='number'
                onChange={handleChange}
                type='text'
                pattern='\d*'
              />
            </div>
            <CustomLink href={link}>{link_btn}</CustomLink>
            <footer className='absolute space-y-2 text-sm text-center text-gray-400 bottom-2'>
              
              <p>
                © {new Date().getFullYear()} by{' '}
                <CustomLink href='https://vaibhavramawat.netlify.app/'>
                  Vaibhav Ramawat
                </CustomLink>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}