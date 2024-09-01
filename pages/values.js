import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Values // Himansh Mudigonda',
    description:
      'Values are the guiding principles that shape our lives. They are the compass that directs our behavior and actions. They influence our decisions, our relationships, and our sense of purpose. They are the foundation of our character and the essence of who we are. In this section, I share the values that define me and guide me in my journey.',
    tagline: 'The Foundation Stone',
    primaryColor: 'white',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function Reminder(props) {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://himudigonda.me/values" property="og:url" />
      </Head>
      <Box css={{ textAlign: 'justify' }}>
        <p>
          1. <strong>Ditch the ego, pal!</strong> It's not your friend. It's like carrying a grumpy cat around all day. Let it go, and feel the freedom!
        </p>
        <p>

          2. <strong>Acceptance isn't waving the white flag, it's opening the door.</strong> It's like saying, "Hey world, I get it. Let's dance!" That's where the real party starts.
        </p>
        <p>

          3. <strong>You've got ♾️ energy inside you!</strong> Don't let those doubts dim your shine. Believe in yourself, and watch amazing things happen.
        </p>
        <p>
          4. <strong>What-When-How</strong> Do what you love, when you want, how you want. It's that simple. Don't let your ego boss you around, do what makes YOU happy.
        </p>
        <p>
          5. <strong>Tools = Respect = Tools</strong> Treat your tools right; they're your sidekicks! Whether it's a laptop, a pen, a stethoscope, a camera, or a shovel. Show them some love.
        </p>
        <p>
          <strong><em>- by Himansh Mudigonda</em></strong>
        </p>
      </Box >
    </>
  )
}

Reminder.Layout = Base

export default Reminder
