import { styled } from '../../stitches.config'; // Adjusted path
// import { PostContainer } from '../Post'; // Adjusted path, assuming PostContainer is needed and exported from Post.js
// PostContainer is not used in the template, so commenting out.

// No specific props were passed to Experience page from its getStaticProps
export default function ExperienceSection(props) {
  return (
    <>
      {/* Head component removed */}
      <Paragraph>
        I'm currently a <strong>Graduate Student</strong> at{' '}
        <a href="https://asu.edu" target="_blank" rel="noopener noreferrer">
          Arizona State University
        </a> pursuing my Master's in Computer Science. My research focuses on the intersection of machine learning, natural language processing, and computer vision with a strong emphasis on developing scalable and robust AI systems.
      </Paragraph>
      <Paragraph>
        Alongside my studies, I actively contribute to open-source projects, engage in competitive programming, and explore the latest advancements in AI. I'm passionate about leveraging technology to solve real-world problems and drive innovation.
      </Paragraph>
      <Paragraph>
        Previously, I've had the opportunity to intern at leading tech companies where I worked on projects involving large-scale data processing, model optimization, and deployment of machine learning models in production environments. These experiences have equipped me with practical skills in software engineering and a deep understanding of the AI development lifecycle.
      </Paragraph>
      <Paragraph>
       My core technical skills include:
       <SkillsList>
         <SkillItem>Machine Learning & Deep Learning (PyTorch, TensorFlow, Keras)</SkillItem>
         <SkillItem>Natural Language Processing (Transformers, Hugging Face, NLTK)</SkillItem>
         <SkillItem>Computer Vision (OpenCV, YOLO, ResNet)</SkillItem>
         <SkillItem>Distributed Systems & Cloud Computing (AWS, GCP, Docker, Kubernetes)</SkillItem>
         <SkillItem>Programming Languages (Python, C++, Java, JavaScript)</SkillItem>
         <SkillItem>MLOps & Data Engineering (Airflow, Kubeflow, Spark)</SkillItem>
       </SkillsList>
      </Paragraph>
    </>
  );
}

// Styled components previously in pages/experience.js (if any, or define new ones)
// Assuming Paragraph was a common styled component, potentially from stitches.config or a shared file.
// If not, define it here or import if it was from a shared component library.
// For this example, let's assume Paragraph is a styled component that should be defined here or imported.
// If it was just <p>, then no special definition needed.
// The original pages/experience.js did not show custom styled components in the read_files output,
// but it used <Paragraph> which implies it was defined or imported.
// Let's assume it's similar to AboutSection's Paragraph for now.
const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
  // Adding some default styling if it's not globally available via stitches.config
  color: '$secondary',
  lineHeight: '1.6',
});

const SkillsList = styled('ul', {
   listStyle: 'disc',
   paddingLeft: '20px',
   marginTop: '10px',
   marginBottom: '10px',
});

const SkillItem = styled('li', {
   marginBottom: '5px',
   color: '$secondary',
});
