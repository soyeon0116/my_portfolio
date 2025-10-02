import AboutLeft from '@/domains/common/components/aboutMe/AboutLeft';
import React from 'react';
import AboutRight from './AboutRight';

export default function AboutMe() {
  return (
    <section id='aboutMe' className='flex flex-col md:flex-row'>
      <AboutLeft />
      <AboutRight />
    </section>
  );
}
