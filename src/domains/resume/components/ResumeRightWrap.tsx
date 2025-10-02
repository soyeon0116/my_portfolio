import Link from 'next/link';
import React from 'react';

export default function ResumeRightWrap() {
  return (
    <div className='flex-2 p-4 flex flex-col gap-6 justify-center'>
      <div>
        <h1 className='my-2'>경력 및 교육 이력</h1>
        <div className='mb-3'>
          <h2 className='my-2'>경력</h2>
          <div className='flex gap-4'>
            <p>2021.05 - 2024.07</p>
            <div>
              <p>오렌지아이 개발팀 근무 (총 3년 3개월)</p>
              <p>삼성 SDI 그룹사 내부 프로그램 개발</p>
              <p>(JavaScript, jQuery, HTML, CSS, Git)</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='my-2'>교육</h2>
          <div className='flex gap-4'>
            <p>2025.02 - 2025.09</p>
            <div>
              <p>React 기반 프론트엔드 개발자 취업 특화 과정</p>
              <p>Next.js, TypeScript, React, JavaScript, HTML, CSS 학습</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='my-2'>최근 프로젝트</h1>
        <div className='flex flex-col gap-2'>
          <h2>Cherry 웹앱 제작</h2>
          <p>개발 기간 : 2025.08 - 2025.09</p>
          <p>
            담당 업무 : 로그인 페이지, 상품 상세 페이지, 장바구니 페이지, 체험
            신청 페이지, 리포트 페이지, 마이 페이지
          </p>
          <p>
            사용 기술 : Next.js(App Router), TypeScirpt, Zustand, Tanstack
            Query, Tailwind CSS
          </p>
          <div className='flex gap-4'>
            <a
              href='https://github.com/DEEPDIVE-PROJECT-200/cherry-frontend'
              target='_blank'
              rel='noopener noreferrer'
              className='border-1 border-gray-300 rounded-sm py-1 px-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'
            >
              Git hub으로 이동
            </a>
            <Link
              href={'/project'}
              className='border-1 border-gray-300 rounded-sm py-1 px-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'
            >
              프로젝트 자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
