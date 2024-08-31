import { styled } from '../stitches.config'
import { Box } from './Box'
import Toast from './Toast'
import { useRef, useState, forwardRef } from 'react'
import { useRouter } from 'next/router'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'
import Lottie from 'lottie-react'
import experienceIcon from '../public/static/icons/experience.json'
import downloadIcon from '../public/static/icons/download.json'
import honorsIcon from '../public/static/icons/honors.json'
import copyLinkIcon from '../public/static/icons/copy-link.json'
import emailIcon from '../public/static/icons/email.json'
import charmIcon from '../public/static/icons/charm.json'
import sourceIcon from '../public/static/icons/source.json'
import aboutIcon from '../public/static/icons/about.json'
import homeIcon from '../public/static/icons/home.json'
import articlesIcon from '../public/static/icons/articles.json'
import projectsIcon from '../public/static/icons/projects.json'
import talksIcon from '../public/static/icons/talks.json'
import podcastsIcon from '../public/static/icons/podcasts.json'
import investingIcon from '../public/static/icons/investing.json'
import usesIcon from '../public/static/icons/uses.json'
import reminderIcon from '../public/static/icons/reminder.json'

export default function CommandBar(props) {
  const copyLinkRef = useRef()
  const emailRef = useRef()
  const sourceRef = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()
  const articlesRef = useRef()
  const projectsRef = useRef()
  const experienceRef = useRef()
  const talksRef = useRef()
  const charmRef = useRef()
  const reminderRef = useRef()
  const honorsRef = useRef()
  const router = useRouter()
  const [showToast, setShowToast] = useState(false)
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
  }
  const iconSize = { width: 24, height: 24 }
  const actions = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['c'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: <Lottie lottieRef={copyLinkRef} style={iconSize} animationData={copyLinkIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'resume',
      name: 'View Resume',
      shortcut: ['r'],
      keywords: 'View-resume',
      section: 'General',
      perform: () => router.push('https://docs.google.com/document/d/1CKc8khM8-MQzm2kvYjrlrGvkbN9oZyH9YCuXJPehxFE/edit?usp=sharing'),
      icon: <Lottie lottieRef={copyLinkRef} style={iconSize} animationData={downloadIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'email',
      section: 'General',
      perform: () => router.push('/contact'),
      icon: <Lottie lottieRef={emailRef} style={iconSize} animationData={emailIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['x'],
      keywords: 'source-code',
      section: 'General',
      perform: () =>
        window.open('https://github.com/himudigonda/himudigonda.me', '_blank'),
      icon: <Lottie lottieRef={sourceRef} style={iconSize} animationData={sourceIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Lottie lottieRef={homeRef} style={iconSize} animationData={homeIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a', 'b'],
      keywords: 'about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <Lottie lottieRef={aboutRef} style={iconSize} animationData={aboutIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'experience',
      name: 'Experience',
      shortcut: ['e', 'x'],
      keywords: 'experience',
      section: 'Go To',
      perform: () => router.push('/experience'),
      icon: <Lottie lottieRef={experienceRef} style={iconSize} animationData={experienceIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p', 'r'],
      keywords: 'projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <Lottie lottieRef={projectsRef} style={iconSize} animationData={projectsIcon} loop={false} autoplay={true} />,
    },

    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['a', 'r'],
      keywords: 'articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <Lottie lottieRef={articlesRef} style={iconSize} animationData={articlesIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'honors',
      name: 'Honors',
      shortcut: ['h', 'o'],
      keywords: 'honors',
      section: 'Go To',
      perform: () => router.push('/honors'),
      icon: <Lottie lottieRef={honorsRef} style={iconSize} animationData={honorsIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'certifications',
      name: 'Certifications',
      shortcut: ['c', 'e'],
      keywords: 'certifications',
      section: 'Go To',
      perform: () => router.push('/certifications'),
      icon: <Lottie lottieRef={talksRef} style={iconSize} animationData={talksIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'publications',
      name: 'Publications',
      shortcut: ['p', 'u'],
      keywords: 'publications',
      section: 'Go To',
      perform: () => router.push('/publications'),
      icon: <Lottie lottieRef={reminderRef} style={iconSize} animationData={reminderIcon} loop={false} autoplay={true} />,
    },
    {
      id: 'Thanks to zenorocha.com for website design.',
      name: 'Thanks to zenorocha.com for website design.',
      shortcut: ['❤️'],
      keywords: 'home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Lottie lottieRef={charmRef} style={iconSize} animationData={charmIcon} loop={false} autoplay={true} />,
    },
  ]
  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <Positioner>
            <Animator>
              <Search placeholder="Type a command or search…" />
              <RenderResults />
            </Animator>
          </Positioner>
        </KBarPortal>
        {props.children}


      </KBarProvider>
      <Toast
        title="Copied Link to Clipboard 📋"
        description="You can now share or paste it anywhere."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

function RenderResults() {
  const { results } = useDeepMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

const ResultItem = forwardRef(({ action, active }, ref) => {
  if (active) {
    action.icon.props.lottieRef.current?.play()
  } else {
    action.icon.props.lottieRef.current?.stop()
  }

  return (
    <Box
      ref={ref}
      css={getResultStyle(active)}
      onMouseEnter={() => action.icon.props.lottieRef.current?.play()}
      onMouseLeave={() => action.icon.props.lottieRef.current?.stop()}
    >
      <Action>
        {action.icon && action.icon}
        <ActionRow>
          <span>{action.name}</span>
        </ActionRow>
      </Action>
      {action.shortcut?.length ? (
        <Shortcut aria-hidden>
          {action.shortcut.map(shortcut => (
            <Kbd key={shortcut}>{shortcut}</Kbd>
          ))}
        </Shortcut>
      ) : null}
    </Box>
  )
})

ResultItem.displayName = 'ResultItem'

const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
})

const Search = styled(KBarSearch, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$primary',
})

const GroupName = styled('div', {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$command',
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
})

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
})

const Action = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
})

const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '$primary',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$command',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },

  /* Hide scrollbar for Chrome, Safari and Opera */
  '& > div > div::-webkit-scrollbar': {
    display: 'none',
  },

  /* Hide scrollbar for IE, Edge and Firefox */
  '& > div > div': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
})

const getResultStyle = active => {
  return {
    padding: '12px 16px',
    background: active ? 'rgba(255, 255, 255, 0.1)' : '$command',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '$primary' : '$secondary',
  }
}
