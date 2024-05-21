import React from 'react'

const skills = {
  frontend: [
    'HTML5',
    'CSS3',
    'Sass/Scss',
    'JavaScript',
    'TypeScript',
    'React.jS',
    'Vue.js',
    'Svelte',
    'Next.js',
    'Gatsby',
    'Astro',
    'React Native',
    'Ionic',
    'Capacitor',
    'Redux',
    'Zustand',
    'Context',
    'Headless CMS',
    'AWS Amplify',
    'Tailwind',
    'Bootstrap',
    'Material-UI',
    'Ant Design',
    'ReactStrap',
    'NativeWind',
  ],
  backend: [
    'GraphQL',
    'RESTfuL',
    'Web Sockets',
    'Supabase',
    'Firebase',
    'Strapi',
    'Sanity',
    'Contentful',
    'HiGraph',
  ],
  infrastructure: [
    'Git',
    'Npm',
    'Yarn',
    'Serverless',
    'Firebase SDK',
    'Amazon Web Services (AWS)',
    'Google Cloud Platform (GCP)',
    'Swagger',
    'Postman',
  ],
}

const SkillTag = ({ skill }) => (
  <span className=" mr-2 mb-2 rounded-2xl rounded border   border-zinc-100 p-6 px-2.5 py-0.5 text-sm font-medium tracking-tight text-zinc-800 dark:border-zinc-700/40 dark:text-zinc-100">
    {skill}
  </span>
)

const SkillsSection = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="mb-4 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {title}
    </h3>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  </div>
)

const Skills = () => (
  <div className="  rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
      Skills
    </h2>
    <SkillsSection title="Frontend" skills={skills.frontend} />
    <SkillsSection title="Backend" skills={skills.backend} />
    <SkillsSection
      title="Infrastructure & Tools"
      skills={skills.infrastructure}
    />
  </div>
)

export default Skills
