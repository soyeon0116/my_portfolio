import AboutLeft from '@/domains/common/components/aboutMe/AboutLeft';
import React from 'react';
import AboutRight from './AboutRight';

export default function AboutMe() {
  return (
    <section id='aboutMe' className='scroll-mt-[48px]'>
      <h1 className='text-4xl font-black text-center mb-2'>About Me</h1>
      <div className='flex flex-col md:flex-row'>
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
}
