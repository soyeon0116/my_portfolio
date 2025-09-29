import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='h-12 p-2 border-b border-b-gray-200 flex gap-3 justify-end items-center'>
      <Link href='/'>HOME</Link>
      <Link href='/'>HOME</Link>
      <Link href='/'>HOME</Link>
    </div>
  );
}
