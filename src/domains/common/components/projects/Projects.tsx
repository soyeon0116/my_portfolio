import { projectList } from './data/projectList';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div id='projects'>
      <section>
        <h1 className='text-4xl font-black text-center mb-2'>Projects</h1>
        <p className='text-center mb-2 text-gray-500'>
          * 프로젝트의 이름을 클릭하면 작업 내용의 상세내용을 확인할 수
          있습니다.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {projectList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
