import { styled } from '../../stitches.config';
import { ListItem } from '../ListItem'; // Adjust path

// Props: publications (array), title, description
export default function PublicationsSection({ publications, title, description }) {
  return (
    <>
      {/* <p>{description}</p> */}
      {publications.map(publication => (
        <ListItem
          key={publication.title}
          title={publication.title}
          description={publication.description}
          url={publication.url}
          icon={publication.icon}
        />
      ))}
    </>
  );
}
