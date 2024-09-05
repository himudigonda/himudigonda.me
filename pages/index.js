import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { getPersonJsonLd } from '../lib/json-ld'

export async function getStaticProps() {
  return {
    props: {
      title: 'Himansh Mudigonda',
      description:
        'Machine Learning, Natural Langauge Processing, Computer Vision, GenerativeAI ',
      primaryColor: '#ffffff',
      secondaryColor: 'orange',
    },
  }
}

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
})

export default function Index(props) {
  const { title, description, primaryColor, secondaryColor } = props

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
              <GradientTitle
                css={{
                  backgroundImage: `linear-gradient(
                    135deg,
                    ${primaryColor} 0%,
                    ${secondaryColor} 100%
                  );`,
                }}
              >
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
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})
