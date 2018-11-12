import React from 'react'

import ProjectSummary from './ProjectSummary.js'
import { Link } from 'react-router-dom'

export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <Link
            to={'/project/' + project.id}
            key={project.id}>
            <ProjectSummary project={project}></ProjectSummary>
          </Link>
        )
      })}
    </div>
  )
}