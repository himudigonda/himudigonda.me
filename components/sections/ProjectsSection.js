import { styled } from '../../stitches.config';
import FeaturedProject from '../FeaturedProject';
import { ListGroup } from '../ListGroup';

// Renamed 'projects' prop to 'yearGroups' for clarity
export default function ProjectsSection({ yearGroups, title, description }) {
  return (
    <>
      {/* Optional: Render a general title for the projects section if needed */}
      {/* <h1>{title}</h1> */}
      {/* <p>{description}</p> */}

      {yearGroups.map((group, groupIndex) => (
        <div key={group.year}>
          {/* Optional: Display the year as a sub-heading */}
          {/* For now, let's skip rendering the year explicitly to keep changes minimal,
              but it can be added back with <h3 style={{width: '100%'}}>{group.year}</h3>
              if ListGroup is a flex container, or just <h2>{group.year}</h2> if it's block.
              The original pages/projects.js output did not show year headings.
          */}
          <ListGroup layout="grid">
            {group.projects.map((project, projectIndex) => (
              <FeaturedProject
                key={project.title} // React key
                project={project}   // Pass the actual project object as the 'project' prop
                // Pass a unique index for the Animation component within FeaturedProject.
                // Using a combination of group and project index for uniqueness.
                index={`project-${groupIndex}-${projectIndex}`}
              />
            ))}
          </ListGroup>
        </div>
      ))}
    </>
  );
}
