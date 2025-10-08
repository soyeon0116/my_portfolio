'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  href: string;
  colorClass: string;
  period: string;
  description: string[];
  techStack: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  href,
  colorClass,
  period,
  description,
  techStack,
  github,
  demo,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className='border-1 border-gray-300 rounded-sm h-[360px] p-2'>
      <div
        className='relative inline-block'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link href={href} className={`text-2xl font-bold ${colorClass}`}>
          {title}
        </Link>
        {hovered && (
          <span className='absolute top-0.5 ml-2 w-20 px-2 py-1 rounded-sm text-center text-sm text-white bg-gray-800 animate-pulse before:absolute before:top-1.5 before:-left-3.5 before:border-8 before:border-transparent before:border-r-gray-800'>
            click me!
          </span>
        )}
      </div>
      <p className='text-gray-500'>작업 기간 : {period}</p>
      <hr className='text-gray-300 my-3' />
      <div className='h-[58%]'>
        <h3 className='text-lg font-bold'>주요 내용</h3>
        {description.map((line, idx) => (
          <p key={idx}>- {line}</p>
        ))}
        <h3 className='text-lg font-bold'>기술 스택</h3>
        <p>{techStack.join(', ')}</p>
      </div>
      <hr className='text-gray-300 my-3' />
      <div className='flex gap-2'>
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
        >
          Github
        </a>
        {demo !== '' && (
          <a
            href={demo}
            target='_blank'
            rel='noopener noreferrer'
            className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
