import AboutLeft from '@/domains/common/components/aboutMe/AboutLeft';
import React from 'react';
import AboutRight from './AboutRight';

export default function AboutMe() {
  return (
    <section
      id='aboutMe'
      className='flex flex-col md:flex-row scroll-mt-[48px]'
    >
      <h1 className='text-4xl font-black text-center mb-2'>About Me</h1>
      <AboutLeft />
      <AboutRight />
    </section>
  );
}
