import { styled } from '../../stitches.config';
import FeaturedProject from '../FeaturedProject'; // Adjust path
import { ListGroup } from '../ListGroup'; // Adjust path

// Props: projects (array), title, description (for consistency, though not used in this template)
export default function ProjectsSection({ projects, title, description }) {
  return (
    <>
      {/* Head and specific page title (like GradientTitle) removed, handled by index.js */}
      <ListGroup layout="grid">
        {projects.map(project => (
          <FeaturedProject
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
            github={project.github}
            tags={project.tags}
          />
        ))}
      </ListGroup>
    </>
  );
}
