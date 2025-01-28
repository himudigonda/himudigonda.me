import { ButtonPrimary } from '../components/ButtonPrimary'
import { parseISO, intervalToDuration } from 'date-fns'
import { styled } from '../stitches.config'
import { useState, useEffect, useRef } from 'react'
import Base from '../layouts/Base'
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import Pronunciation from '../components/Pronunciation'
import stripHtml from '../lib/strip-html'
import Toast from '../components/Toast'

export async function getStaticProps() {
  const meta = {
    title: 'About // Himansh Mudigonda',
    description:
      'Himansh Mudigonda is a Machine Learning Engineer with expertise in LLM fine-tuning, scalable ML pipelines, and distributed AI systems. He specializes in deploying cloud-native AI solutions, optimizing transformer architectures, and building high-performance real-time inference systems. His technical strengths include MLOps automation, ensemble learning, multimodal deep learning, and knowledge graphs. With hands-on experience in PyTorch, TensorFlow, LangChain, ONNX Runtime, FastAPI, and Kubernetes, he has developed state-of-the-art AI models for healthcare, edge AI, and large-scale enterprise applications. His cloud expertise spans AWS, GCP, and Databricks, with a strong foundation in CI/CD, containerization, and distributed training. Himansh has contributed to cutting-edge research, including non-invasive blood glucose detection and cognitive AI models, publishing in Nature Journal’s Scientific Reports and IEEE conferences. He is passionate about building AI systems that are efficient, explainable, and human-centered, ensuring innovation aligns with real-world impact, ethical AI, and user privacy.',
    tagline: 'Innovate. Learn. Excel.',
    primaryColor: 'white',
    secondaryColor: 'red',
  }

  return { props: meta }
}

function About(props) {
  const { title, description } = props
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [countdown, setCountdown] = useState(null)
  const copyBioRef = useRef()
  const downloadRef1 = useRef()
  const downloadRef2 = useRef()

  useEffect(() => {
    let timer
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (countdown === 0 && countdown !== null) {
      window.open(
        'https://docs.google.com/document/d/1CKc8khM8-MQzm2kvYjrlrGvkbN9oZyH9YCuXJPehxFE/edit?usp=sharing',
        '_blank',
        'noopener,noreferrer'
      )
    }
    return () => clearTimeout(timer)
  }, [countdown])

  const downloadHeadshot = () => {
    setToastTitle('Downloading...')
    setToastDescription('The headshot is being downloaded.')
    setShowToast(true)
  }

  const showResume = () => {
    setToastTitle('Opening Resume...')
    setToastDescription('The resume will open in Google Docs in 3 seconds.')
    setShowToast(true)
  }

  const copyBio = e => {
    e.preventDefault()
    navigator.clipboard.writeText(description)

    setToastTitle('Copied Bio to Clipboard 📋')
    setToastDescription('You can now share or paste it anywhere.')
    setShowToast(true)
  }

  const renderIntro = () => (
    <Container>
      <Section>
        <Image
          alt="Himansh"
          src="/static/images/avatar.png"
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </Section>





      <Section>
        <Paragraph
          css={{
            textAlign: 'justify',
            marginTop: '16px',
            '@bp2': { marginTop: '-6px' },
          }}
        >
          <strong>Hi, I'm Himansh Mudigonda</strong>
          <Pronunciation />
          I design <strong>high-performance, scalable AI systems</strong> that bridge research and production.
          Specializing in <strong>Machine Learning, Large Language Models, and Distributed Systems</strong>,
          I focus on building <strong>robust ML pipelines, optimizing transformer architectures,
            and deploying cloud-native AI solutions</strong> that don’t just function—they perform at scale.
        </Paragraph>
        <Paragraph
          css={{
            textAlign: 'justify',
            marginTop: '16px',
            '@bp2': { marginTop: '-6px' },
          }}
        >
          My work revolves around <strong>LLM fine-tuning, MLOps automation, and real-time inference</strong>,
          ensuring AI systems are efficient, ethical, and production-ready. I thrive in environments where
          <strong>precision, scalability, and impact</strong> matter—whether it’s optimizing
          <strong>large-scale AI deployments</strong> or solving <strong>complex real-world challenges</strong>.
          Beyond code, I push the boundaries of <strong>generative AI</strong>, fine-tune <strong>Linux kernels</strong>
          for performance, and experiment with <strong>speed-solving algorithms</strong>. When I’m not working on AI,
          you’ll find me hiking new trails, crafting melodies on my <strong>guitar</strong>, or seeking the
          <strong>perfect brew of coffee</strong>.
        </Paragraph>
      </Section>




    </Container>
  )

  const renderBio = () => {
    const btnStyle = {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    const iconStyle = { width: 24, height: 24, marginRight: 8 }

    return (
      <div>
        <p>A formal definition.</p>
        <blockquote>
          <Paragraph
            css={{
              textAlign: 'justify',
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            {description}
          </Paragraph>
        </blockquote>
        <ButtonsContainer>
          <ButtonPrimary
            as="button"
            style={btnStyle}
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <Lottie
              lottieRef={copyBioRef}
              style={iconStyle}
              animationData={copyBioIcon}
              loop={false}
              autoplay={true}
            />
            Copy Bio
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary
            as="a"
            download
            role="button"
            href="/static/images/avatar.png"
            style={btnStyle}
            onClick={downloadHeadshot}
            onMouseEnter={() => downloadRef1.current?.play()}
            onMouseLeave={() => downloadRef1.current?.stop()}
          >
            <Lottie
              lottieRef={downloadRef1}
              style={iconStyle}
              animationData={downloadIcon}
              loop={false}
              autoplay={true}
            />
            Download Headshot
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary
            as="a"
            href="https://docs.google.com/document/d/1CKc8khM8-MQzm2kvYjrlrGvkbN9oZyH9YCuXJPehxFE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
            onClick={e => {
              e.preventDefault() // Prevent the default anchor behavior
              setCountdown(3) // Start the countdown
              showResume()
            }}
            onMouseEnter={() => downloadRef2.current?.play()}
            onMouseLeave={() => downloadRef2.current?.stop()}
          >
            <Lottie
              lottieRef={downloadRef2}
              style={iconStyle}
              animationData={downloadIcon}
              loop={false}
              autoplay={false}
            />
            {countdown > 0 ? `Viewing in ${countdown}...` : 'View Resume'}
          </ButtonPrimary>
        </ButtonsContainer>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://himudigonda.me/about" property="og:url" />
        {/* <meta content={`https://himudigonda.me${image}`} property="og:image" /> */}
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center',
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
