import { styled } from '../../stitches.config';
import { ListItem } from '../ListItem'; // Adjust path

// Props: awards (array), scholarships (array), title, description
export default function HonorsSection({ awards, scholarships, title, description }) {
  return (
    <>
      {/* <p>{description}</p> */}
      <h3>Awards</h3>
      {awards.map(award => (
        <ListItem
          key={award.title}
          title={award.title}
          description={award.description}
          url={award.url}
          icon={award.icon}
        />
      ))}
      <h3>Scholarships</h3>
      {scholarships.map(scholarship => (
        <ListItem
          key={scholarship.title}
          title={scholarship.title}
          description={scholarship.description}
          url={scholarship.url}
          icon={scholarship.icon}
        />
      ))}
    </>
  );
}
