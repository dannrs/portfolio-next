import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: 'Projects'
}

export default function ProjectsPage() {
  return (
    <div className='container py-4 md:max-w-5xl'>
      <div className='space-y-4 pb-4'>
        <h1 className='font-heading text-3xl tracking-tight md:text-4xl'>
          My Projects
        </h1>
        <p className='text-foreground-80 text-lg'>
          The projects I created focused on web applications built with React
          and its frameworks, especially Next.js.
        </p>
      </div>
      <ProjectCard />
    </div>
  )
}
