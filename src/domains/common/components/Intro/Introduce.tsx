import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

export default function Introduce() {
  return (
    <div
      id='intro'
      className="relative bg-[url('/images/main.jpg')] bg-cover bg-center h-[500px]"
    >
      <div className='absolute inset-0 bg-[#00000080]' />
      <section className='relative top-[30px] z-10 flex flex-col gap-4 items-center text-white text-center'>
        <h1 className='text-5xl font-bold'>김소연의 포트폴리오</h1>
        <p className='text-xl'>
          안녕하세요.
          <br />
          UI/UX를 넘어 DX를 고민하는 프론트엔드 개발자
          <br />
          김소연입니다.
        </p>
        <div className='flex gap-2'>
          <a
            href='/assets/resume.pdf'
            download
            className='border-1 border-gray-300 rounded-sm py-1 px-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'
          >
            이력서 다운로드 <FaDownload />
          </a>
          <a
            href='https://velog.io/@soyeon0116/posts'
            target='_blank'
            rel='noopener noreferrer'
            className='border-1 border-gray-300 rounded-sm py-1 px-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'
          >
            Velog 둘러보기
            <SiVelog />
          </a>
        </div>
      </section>
    </div>
  );
}
