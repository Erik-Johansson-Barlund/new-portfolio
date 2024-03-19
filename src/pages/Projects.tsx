import React from 'react'
import ProjectCard from '../components/ProjectCard'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ProjectType = {
  title: string
  description: string
  image: string
  link: string
  tech: string[]
}

const projects: ProjectType[] = [
  {
    title: 'IKEA',
    description: 'Planner tool within the IKEA website',
    image: 'https://i.imgur.com/2vL0Kkq.png',
    link: 'https://www.ikea.com/',
    tech: ['React', 'TypeScript', 'Cypress', 'Jest', 'AWS', 'Serverless Framework', 'Styled Components']
  },
  {
    title: 'pIKEA',
    description: 'Planner tool within the IKEA website',
    image: 'https://i.imgur.com/2vL0Kkq.png',
    link: 'https://www.ikea.com/',
    tech: ['React', 'TypeScript', 'Cypress', 'Jest', 'AWS', 'Serverless Framework', 'Styled Components']
  },
  {
    title: 'cIKEA',
    description: 'Planner tool within the IKEA website',
    image: 'https://i.imgur.com/2vL0Kkq.png',
    link: 'https://www.ikea.com/',
    tech: ['React', 'TypeScript', 'Cypress', 'Jest', 'AWS', 'Serverless Framework', 'Styled Components']
  }
]

function Projects (): JSX.Element {
  return (
    <div className="relative flex max-w-screen-lg justify-center flex-wrap gap-12">
      {projects.map((project: ProjectType) => (<ProjectCard key={project.title} project={project} />))}
    </div>
  )
}

export default Projects
