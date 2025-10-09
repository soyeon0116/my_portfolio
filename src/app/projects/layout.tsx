import Link from 'next/link';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 bg-white h-12 p-2 border-b border-b-gray-200 flex gap-3 justify-between items-center z-50'>
        <Link href='/' className='font-bold'>
          SOYEON
        </Link>
      </div>
      {children}
    </div>
  );
}
