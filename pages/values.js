import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Values // Himansh Mudigonda',
    description:
      'Values shape our actions, decisions, and the impact we make in the world. They are the foundation of who we are. In this section, I share the principles that guide me through every project and challenge.',
    tagline: 'The Essence of Innovation',
    primaryColor: 'white',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function Reminder(props) {
  const { title, description } = props

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
          1. <strong>Real-World Impact:</strong> I believe technology should solve tangible problems and improve lives. My work is always driven by the question, "How can this create real, meaningful change?" Every project I undertake is an opportunity to make a difference, whether it’s through AI-powered healthcare solutions or personalized learning systems.
        </p>
        <p>
          2. <strong>Empathy:</strong> Understanding the experiences and challenges of others is essential. Empathy guides my approach to building solutions that are inclusive and user-centered, ensuring that technology is accessible and genuinely helpful to all users.
        </p>
        <p>
          3. <strong>Learning and Growth:</strong> I see every challenge as a learning opportunity. For me, growth is a continuous journey, and each failure or setback is a chance to adapt, innovate, and push boundaries. This mindset fuels my drive to explore new technologies and continuously improve.
        </p>
        <p>
          4. <strong>Collaboration:</strong> I value diverse perspectives and the power of teamwork. Great solutions are built through sharing ideas, aligning strengths, and learning from each other. I thrive in cross-functional teams, bridging gaps between different disciplines to achieve common goals.
        </p>
        <p>
          5. <strong>Attention to Detail:</strong> In every project, I focus on the finer details that make a significant difference. Whether it’s fine-tuning a machine learning model or crafting a user experience, I believe excellence is achieved by refining and polishing until the final product is truly impactful.
        </p>
        <p>
          6. <strong>Inclusivity:</strong> I believe technology should be accessible to everyone. Inclusivity is at the core of the solutions I create, ensuring that they are equitable and serve a diverse range of users, regardless of their background or circumstances.
        </p>
        <p>
          <strong><em>- by Himansh Mudigonda</em></strong>
        </p>
      </Box>
    </>
  )
}

Reminder.Layout = Base

export default Reminder