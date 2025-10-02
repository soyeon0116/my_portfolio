import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 bg-white h-12 p-2 border-b border-b-gray-200 flex gap-3 justify-end items-center'>
      <Link href='/'>HOME</Link>
      <Link href='/resume'>RESUME</Link>
      <Link href='/project'>PROJECT</Link>
    </div>
  );
}
