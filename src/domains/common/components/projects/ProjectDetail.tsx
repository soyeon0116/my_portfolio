import Image from 'next/image';
import React from 'react';
import { Page } from './types/projectType';

interface Props {
  datas: Page;
}
export default function ProjectDetail({ datas }: Props) {
  return (
    <div className='max-h-[600px] overflow-y-auto'>
      <div className='flex justify-center my-2'>
        <Image
          src={datas.images}
          alt={`${datas.name}의 캡쳐 이미지`}
          width={300}
          height={300}
        />
      </div>
      <div>
        <h3 className='text-xl font-bold mb-2'>{datas.name} 페이지</h3>
        {datas.tasks.map((v, i) => (
          <p key={i}>- {v}</p>
        ))}
      </div>
    </div>
  );
}
