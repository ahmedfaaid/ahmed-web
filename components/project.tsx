import Image from 'next/image';
import { Project as ProjectType } from 'types';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className='card m-auto h-[26rem] rounded-sm bg-white p-3 text-center shadow-md dark:bg-[#232324] md:w-full lg:w-4/5'>
      <a
        href={project.deployed}
        target='_blank'
        rel='noreferrer noopener'
        className='relative block h-40 w-full'
      >
        <Image
          src={project.image}
          alt={project.name}
          layout='fill'
          objectFit='contain'
        />
      </a>
      <a href={project.deployed} target='_blank' rel='noreferrer noopener'>
        <h2 className='my-5 text-center text-xl text-black dark:text-white'>
          {project.name}
        </h2>
      </a>
      <a href={project.deployed} target='_blank' rel='noreferrer noopener'>
        <p className='text-center italic text-black dark:text-off-white'>
          {project.description}
        </p>
      </a>
      <a
        href={project.github}
        target='_blank'
        rel='noreferrer noopener'
        className='my-6 inline-block w-48 rounded-sm bg-primary px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-[#2330a3]'
      >
        <i className='fab fa-github mr-1' /> Project GitHub
      </a>
    </div>
  );
}
