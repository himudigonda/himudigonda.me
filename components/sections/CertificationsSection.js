import { styled } from '../../stitches.config';
import { ListItem } from '../ListItem'; // Adjust path

// Props: certifications (array), title, description
export default function CertificationsSection({ certifications, title, description }) {
  return (
    <>
      {/* <p>{description}</p> */}
      {certifications.map(certification => (
        <ListItem
          key={certification.title}
          title={certification.title}
          description={certification.description}
          url={certification.url}
          icon={certification.icon}
        />
      ))}
    </>
  );
}
