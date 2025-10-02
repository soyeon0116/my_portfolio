import Image from 'next/image';

export default function AboutLeft() {
  return (
    <div className='flex-1 p-2 flex flex-col text-center items-center justify-around md:justify-center'>
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
    </div>
  );
}
