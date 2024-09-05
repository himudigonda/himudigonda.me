import { styled } from '../stitches.config'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import readingTime from 'reading-time'
import Lottie from 'lottie-react'

export default function FeaturedArticle(props) {
  const stats = readingTime(props.content)
  const icon = require(`../public/static/icons/resend.json`)
  const iconRef = useRef()

  return (
    <Article
      href={props.href}
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Animation index={props.index}>
        <Container>
          <Lottie
            lottieRef={iconRef}
            style={{ width: 24, height: 24, marginBottom: 10 }}
            animationData={icon}
            loop={false}
            autoplay={true}
          />
          <Content>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Stats>{stats.text}</Stats>
          </Content>
        </Container>
      </Animation>
    </Article>
  )
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return (
    <AnimContainer
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
      className="featured-article-anim"
    >
      {isHovered && (
        <AnimHovered
          layoutId="featuredArticles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {props.children}
    </AnimContainer>
  )
}

const Article = styled('a', {
  border: '0',
  width: '370px',
  marginLeft: '20px',
  textDecoration: 'none',
  '&:hover': { opacity: 1 },
  '&:first-child': { marginLeft: 0 },
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const ImageContainer = styled('div', {
  borderRadius: '8px',
  width: '370px',
  height: '180px',
  marginBottom: '20px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  filter: 'grayscale(1)',
})

const Content = styled('div', {
  maxWidth: '450px',
  marginRight: '20px',
  '@bp2': { maxWidth: '100%', marginRight: 0 },
})

const Title = styled('h3', {
  color: '$primary',
  margin: 0,
})

const Description = styled('p', {
  color: '$secondary',
  display: '-webkit-box',
  margin: 0,
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

const Stats = styled('p', {
  margin: '5px 0 0',
  color: '$primary',
  textTransform: 'uppercase',
  display: 'inline-block',
  fontWeight: 500,
  letterSpacing: '1.2px',
  fontSize: '12px',
})

const AnimContainer = styled(motion.div, {
  position: 'relative',
  width: '100%',
  padding: '20px',
})

const AnimHovered = styled(motion.div, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})
