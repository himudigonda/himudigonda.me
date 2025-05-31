import { styled } from '../../stitches.config';

// Props: title, description (though not explicitly used in this static content)
export default function ValuesSection({ title, description }) {
  // Define Paragraph locally if not available globally and if needed.
  // For simplicity, using standard p tags or assuming global p styling.
  // const Paragraph = styled('p', { color: '$secondary', lineHeight: '1.6' });
  return (
    <>
      <p><strong>Continuous Learning:</strong> I believe in the lifelong pursuit of knowledge and skills. Technology evolves rapidly, and staying curious and adaptable is key to growth and innovation.</p>
      <p><strong>Impact-Driven:</strong> My goal is to work on projects that make a meaningful difference. I am motivated by solving real-world problems and creating solutions that benefit users and society.</p>
      <p><strong>Collaboration & Humility:</strong> I value teamwork and open communication. I believe the best ideas emerge from diverse perspectives and a humble approach to learning from others.</p>
      <p><strong>Integrity & Ethics:</strong> I am committed to upholding the highest standards of integrity and ethical conduct in all my endeavors, especially in the development and deployment of AI.</p>
      <p><strong>User-Centricity:</strong> Technology should serve people. I strive to build solutions that are intuitive, accessible, and provide a positive user experience.</p>
    </>
  );
}
