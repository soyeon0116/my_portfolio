import { projectList } from './data/projectList';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div id='projects'>
      <section>
        <h1 className='text-4xl font-black text-center mb-2'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {projectList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
