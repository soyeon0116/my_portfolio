import Image from 'next/image';
import { FaDownload } from 'react-icons/fa6';
import { SiVelog } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <div className='flex-1 border-1 p-2 flex flex-col text-center items-center justify-around'>
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
        <div className='flex md:flex-col gap-2 flex-row'>
          <a
            href='/assets/resume.pdf'
            download
            className='border-1 border-gray-300 rounded-sm py-1 px-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'
          >
            이력서 다운로드 <FaDownload />
          </a>
          <a
            href='https://velog.io/@soyeon0116/posts'
            className='border-1 border-gray-300 rounded-sm py-1 px-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'
          >
            Velog 둘러보기
            <SiVelog />
          </a>
        </div>
      </div>
      <div className='flex-2 border-1 p-2'></div>
    </>
  );
}
