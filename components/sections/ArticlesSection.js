import { styled } from '../../stitches.config';
import FeaturedArticle from '../FeaturedArticle'; // Adjust path
import { ListGroup } from '../ListGroup'; // Adjust path

// Props: posts (array), title, description
export default function ArticlesSection({ posts, title, description }) {
  return (
    <>
      {/* <p>{description}</p> */}{/* Original page had a description paragraph, can be added if needed */}
      <ListGroup layout="grid">
        {posts.map(frontMatter => (
          <FeaturedArticle
            key={frontMatter.title}
            title={frontMatter.title}
            date={frontMatter.date}
            url={`/${frontMatter.slug}`} // Assuming slug is still relevant for constructing URLs
            image={frontMatter.image}
            description={frontMatter.description}
          />
        ))}
      </ListGroup>
    </>
  );
}
