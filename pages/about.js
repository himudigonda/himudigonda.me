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
      'Himansh Mudigonda is a Computer Science graduate student with deep expertise in Artificial Intelligence, Machine Learning, and Distributed Systems. He specializes in fine-tuning large-scale language and vision models, optimizing deep learning pipelines, and building scalable, cloud-native AI solutions. Proficient in frameworks like PyTorch, TensorFlow, and LangChain, Himansh excels in MLOps, distributed training, and real-time inference. His technical toolkit includes transformer architectures, ensemble learning, graph-based models, and uncertainty quantification techniques. With a strong foundation in cloud platforms such as AWS, GCP, and Azure, he is adept at designing and deploying robust, high-performance machine learning systems tailored to solve complex, real-world problems.',
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
    I'm a Computer Science graduate student at Arizona State University (ASU),
    <strong> specializing in Artificial Intelligence, Machine Learning, and Distributed Systems</strong>.
  </Paragraph>
  <Paragraph
    css={{
      textAlign: 'justify',
      marginTop: '16px',
      '@bp2': { marginTop: '-6px' },
    }}
  >
    My expertise lies in developing <strong> scalable ML pipelines</strong>, optimizing
    <strong> transformer architectures</strong>, and deploying <strong> cloud-native AI solutions</strong>.
    I have hands-on experience with <strong> LLM fine-tuning</strong>, <strong> MLOps automation</strong>,
    and <strong> real-time inference</strong>. In my free time, I dive into
    <strong> generative AI experiments</strong>, tweak <strong> Linux kernels</strong> for performance,
    or challenge myself with <strong> speed-solving algorithms</strong> for Rubik’s cubes. When I’m not
    working with code, you’ll find me crafting melodies on my <strong> guitar</strong> or exploring new
    trails up the <strong> iconic ‘A’ Mountain</strong>, fueled by an endless quest for the
    <strong> perfect brew of coffee</strong>.
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
        <p>A more formal definition.</p>
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
