import Layout from 'components/layout';
import Project from 'components/project';
import { projects } from 'constants/projectData';
import { Project as ProjectType } from 'types';

export default function Projects() {
  return (
    <Layout title='Projects'>
      <section>
        <div className='mt-8 grid gap-4 px-4 sm:grid-cols-2 sm:px-0 md:mt-16 md:grid-cols-3 lg:mt-24'>
          {projects.map((project: ProjectType) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
