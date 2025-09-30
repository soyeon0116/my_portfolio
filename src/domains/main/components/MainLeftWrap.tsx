'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { SiVelog } from 'react-icons/si';

export default function MainLeftWrap() {
  const pathName = usePathname();

  return (
    <div className='flex-1 border-b border-b-gray-300 p-2 flex flex-col text-center items-center justify-around md:justify-center md:border-r md:border-r-gray-300'>
      <div className='w-[100px] h-[100px] overflow-hidden rounded-full'>
        <Image
          src='/images/myPhoto.jpg'
          alt='김소연의 증명사진'
          width={100}
          height={100}
        />
      </div>
      <h1 className='my-2'>
        DX를 위해 고민하는 개발자 <br /> 김소연입니다.
      </h1>
      <div className='my-2 text-left border-1 border-gray-300 rounded-sm px-2 py-1 w-[300px]'>
        <p>연락처 : 010-4240-0116</p>
        <p>e-mail : ksy9252@naver.com</p>
      </div>
      {pathName === '/resume' && (
        <div className='flex md:flex-row gap-2'>
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
      )}
    </div>
  );
}
