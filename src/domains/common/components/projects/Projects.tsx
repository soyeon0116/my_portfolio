import React from 'react';

export default function Projects() {
  return (
    <div id='projects'>
      <section>
        <h1 className='text-4xl font-black text-center mb-2'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          <div className='border-1 border-gray-300 rounded-sm h-[360px] p-2'>
            <h2 className='text-2xl font-bold text-gray-500'>Portfolio</h2>
            <p className='text-gray-500'>작업 기간 : 2025.10</p>
            <hr className='text-gray-300 my-3' />
            <div className='h-[58%]'>
              <h3 className='text-lg font-bold'>주요 내용</h3>
              <p>- 소개, 이력, 프로젝트 화면 제작</p>
              <p>- Parallel Routes 활용</p>
              <h3 className='text-lg font-bold'>기술 스택</h3>
              <p>Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <hr className='text-gray-300 my-3' />
            <div className='flex gap-2'>
              <a
                href='https://github.com/soyeon0116/goorm-music'
                target='_blank'
                rel='noopener noreferrer'
                className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
              >
                Github
              </a>
              <a
                href='https://goorm-music.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='border-1 border-gray-300 rounded-sm h-[360px] p-2'>
            <h2 className='text-2xl font-bold text-[#f44236]'>Cherry</h2>
            <p className='text-gray-500'>작업 기간 : 2025.08 ~ 2025.09</p>
            <hr className='text-gray-300 my-3' />
            <div className='h-[58%]'>
              <h3 className='text-lg font-bold'>주요 내용</h3>
              <p>- 카카오 oAuth를 활용한 간편 로그인 기능</p>
              <p>- Tanstack Query를 활용</p>
              <p>- 달력 라이브러리 커스텀</p>
              <p>- 도로명 API 호출</p>
              <h3 className='text-lg font-bold'>기술 스택</h3>
              <p>Next.js, TypeScript, Tanstack Query, Zustand, Tailwind CSS</p>
            </div>
            <hr className='text-gray-300 my-3' />
            <div className='flex gap-2'>
              <a
                href='https://github.com/DEEPDIVE-PROJECT-200/cherry-frontend'
                target='_blank'
                rel='noopener noreferrer'
                className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
              >
                Github
              </a>
              <a
                href='https://200-cherry.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='border-1 border-gray-300 rounded-sm h-[360px] p-2'>
            <h2 className='text-2xl font-bold text-[#6cc2ff]'>Goorm Music</h2>
            <p className='text-gray-500'>작업 기간 : 2025.07 ~ 2025.08</p>
            <hr className='text-gray-300 my-3' />
            <div className='h-[58%]'>
              <h3 className='text-lg font-bold'>주요 내용</h3>
              <p>- 개인 플레이리스트 제작 기능</p>
              <p>- 장르별 추천 음악 출력 기능</p>
              <p>- 검색 기능</p>
              <p>- Spotify API 연결</p>
              <h3 className='text-lg font-bold'>기술 스택</h3>
              <p>Next.js, TypeScript, Zustand, Tailwind CSS</p>
            </div>
            <hr className='text-gray-300 my-3' />
            <div className='flex gap-2'>
              <a
                href='https://github.com/soyeon0116/goorm-music'
                target='_blank'
                rel='noopener noreferrer'
                className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
              >
                Github
              </a>
              <a
                href='https://goorm-music.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
