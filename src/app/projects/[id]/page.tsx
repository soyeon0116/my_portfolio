'use client';
import { projectDetails } from '@/domains/common/components/projects/data/projectDetails';
import ProjectDetail from '@/domains/common/components/projects/ProjectDetail';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const project = projectDetails[id];
  const [selected, setSelected] = useState(project.pages[0].name);
  const selectedPage = project.pages.find((page) => page.name === selected);

  if (!project || !project.pages || project.pages.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-6'>
      <button
        onClick={() => router.back()}
        className='absolute top-0 right-0 px-4 py-2 cursor-pointer'
      >
        <IoMdClose />
      </button>
      <h2 className='text-2xl font-bold mb-4'>{project.title} 상세 내용</h2>
      <div>
        <ul className='border-b border-gray-300 flex gap-3'>
          {project.pages.map((page) => (
            <li
              key={page.name}
              className={`px-2 py-1 inline-block cursor-pointer ${
                selected === page.name ? 'bg-gray-300 rounded-t-sm' : ''
              }`}
              onClick={() => setSelected(page.name)}
            >
              {page.name}
            </li>
          ))}
        </ul>
        {selectedPage && <ProjectDetail datas={selectedPage} />}
        <div className='flex gap-2 mt-2'>
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
          >
            Github
          </a>
          <a
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='border-1 border-gray-500 rounded-sm font-semibold inline-block px-2 py-1 cursor-pointer hover:bg-gray-500 hover:text-white'
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
