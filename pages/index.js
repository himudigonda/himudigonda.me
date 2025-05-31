import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { getPersonJsonLd } from '../lib/json-ld'

import { getAllFilesFrontMatter } from '../lib/blog'
import projectsData from '../data/projects'
import publicationsData from '../data/publications'
import awardsData from '../data/awards'
import scholarshipsData from '../data/scholarships'
import certificationsData from '../data/certifications'

import AboutSection from '../components/sections/AboutSection.js'
import ExperienceSection from '../components/sections/ExperienceSection.js'
import ProjectsSection from '../components/sections/ProjectsSection.js'
import ArticlesSection from '../components/sections/ArticlesSection.js'
import HonorsSection from '../components/sections/HonorsSection.js'
import CertificationsSection from '../components/sections/CertificationsSection.js'
import PublicationsSection from '../components/sections/PublicationsSection.js'
import ValuesSection from '../components/sections/ValuesSection.js'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('articles')
  const projects = projectsData
  const publications = publicationsData
  const awards = awardsData
  const scholarships = scholarshipsData
  const certifications = certificationsData

  return {
    props: {
      title: 'Himansh Mudigonda',
      description: 'Machine Learning, Natural Langauge Processing, Computer Vision, GenerativeAI ',
      primaryColor: '#ffffff',
      secondaryColor: 'orange',
      posts,
      projects,
      publications,
      awards,
      scholarships,
      certifications,
      aboutTitle: 'About // Himansh Mudigonda',
      aboutDescription: 'Himansh Mudigonda is a Machine Learning Engineer with expertise in LLM fine-tuning, scalable ML pipelines, and distributed AI systems. He specializes in deploying cloud-native AI solutions, optimizing transformer architectures, and building high-performance real-time inference systems. His technical strengths include MLOps automation, ensemble learning, multimodal deep learning, and knowledge graphs. With hands-on experience in PyTorch, TensorFlow, LangChain, ONNX Runtime, FastAPI, and Kubernetes, he has developed state-of-the-art AI models for healthcare, edge AI, and large-scale enterprise applications. His cloud expertise spans AWS, GCP, and Databricks, with a strong foundation in CI/CD, containerization, and distributed training. Himansh has contributed to cutting-edge research, including non-invasive blood glucose detection and cognitive AI models, publishing in Nature Journal’s Scientific Reports and IEEE conferences. He is passionate about building AI systems that are efficient, explainable, and human-centered, ensuring innovation aligns with real-world impact, ethical AI, and user privacy.',
      aboutTagline: 'Innovate. Learn. Excel.',
      aboutPrimaryColor: 'white',
      aboutSecondaryColor: 'red',
      articlesTitle: 'Articles // Himansh Mudigonda',
      articlesDescription: "Here are some articles I've written.",
      projectsTitle: 'Projects // Himansh Mudigonda',
      projectsDescription: "Here are some of the projects I've worked on.",
      publicationsTitle: 'Publications // Himansh Mudigonda',
      publicationsDescription: 'My research and publications.',
      honorsTitle: 'Honors // Himansh Mudigonda',
      honorsDescription: 'Recognitions and scholarships.',
      certificationsTitle: 'Certifications // Himansh Mudigonda',
      certificationsDescription: 'My certifications and qualifications.',
    },
  }
}

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
});

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
});

export default function Index(props) {
  const {
    title, description, primaryColor, secondaryColor,
    posts, projects, publications, awards, scholarships, certifications,
    aboutTitle, aboutDescription, aboutTagline, aboutPrimaryColor, aboutSecondaryColor,
    articlesTitle, articlesDescription,
    projectsTitle, projectsDescription,
    publicationsTitle, publicationsDescription,
    honorsTitle, honorsDescription,
    certificationsTitle, certificationsDescription
  } = props

  const aboutProps = { title: aboutTitle, description: aboutDescription, tagline: aboutTagline, primaryColor: aboutPrimaryColor, secondaryColor: aboutSecondaryColor };
  const articlesProps = { posts, title: articlesTitle, description: articlesDescription, primaryColor: 'cyan', secondaryColor: 'blue' };
  const projectsProps = { projects, title: projectsTitle, description: projectsDescription, primaryColor: 'orange', secondaryColor: 'red' };
  const publicationsProps = { publications, title: publicationsTitle, description: publicationsDescription, primaryColor: 'green', secondaryColor: 'yellow' };
  const honorsProps = { awards, scholarships, title: honorsTitle, description: honorsDescription, primaryColor: 'yellow', secondaryColor: 'orange' };
  const certificationsProps = { certifications, title: certificationsTitle, description: certificationsDescription, primaryColor: 'pink', secondaryColor: 'purple' };

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://himudigonda.me" property="og:url" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
          key="person-jsonld"
        />
      </Head>
      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <GradientTitle css={{ backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%);` }}>
                {title}
              </GradientTitle>
              <p>
                <strong>
                  CompSci Graduate Student @{' '}
                  <a href="https://engineering.asu.edu/" target="blank">
                    Ira A. Fulton Schools of Engineering, Arizona State
                    University
                  </a>
                </strong>
                <br />
                {description}
              </p>
              <ShortcutHome />
            </div>

            <section id="about"><h2>About</h2><AboutSection {...aboutProps} /></section>
            <section id="experience"><h2>Experience</h2><ExperienceSection /></section>
            <section id="projects"><h2>Projects</h2><ProjectsSection {...projectsProps} /></section>
            <section id="articles"><h2>Articles</h2><ArticlesSection {...articlesProps} /></section>
            <section id="publications"><h2>Publications</h2><PublicationsSection {...publicationsProps} /></section>
            <section id="honors"><h2>Honors</h2><HonorsSection {...honorsProps} /></section>
            <section id="certifications"><h2>Certifications</h2><CertificationsSection {...certificationsProps} /></section>
            <section id="values"><h2>Values</h2><ValuesSection /></section>

          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  );
}
