'use client';
import { useRouter } from 'next/navigation';
import React, { use } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  console.log(params);
  return (
    <div className='fixed inset-0 bg-[#0000007a] flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg w-[600px] max-w-full relative'>
        <button
          onClick={() => router.back()}
          className='absolute top-0 right-0 px-4 py-2 cursor-pointer'
        >
          <IoMdClose />
        </button>
        <h2 className='text-2xl font-bold mb-4'>작업 내용</h2>
        <p>여기에 {id} 프로젝트의 상세 내용을 넣어주세요.</p>
      </div>
    </div>
  );
}
