import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Pronunciation from '../components/Pronunciation'
import Toast from '../components/Toast'
import stripHtml from '../lib/strip-html'
// import items from '../data/about'
import items from '../data/honors'
import Lottie from 'lottie-react'
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'
export async function getStaticProps() {
    // const allPosts = getAllPosts(['date', 'skip', 'slug', 'title'])

    const featuredParams = [
        'date',
        'slug',
        'title',
        'image',
        'content',
        'description',
    ]

    const featuredPosts = [
    ]

    return {
        props: {
            title: 'Articles // Himansh Mudigonda',
            tagline: 'Respect. Power. Banana.',
            image: '/static/images/articles-bw.jpg',
            primaryColor: 'yellow',
            secondaryColor: 'pink',
            // featuredPosts,
            // allPosts,
        },
    }
}

function Honors(props) {
    const renderAll = () => {
        return items.map((item, index) => {
            return (
                <div style={{ marginBottom: 40 }} key={index}>
                    <h3>{item.jobTitle}</h3>
                    <p style={{ margin: 0 }}>
                        <a href={item.companyUrl} target="_blank">
                            {item.company}
                        </a>
                        <span> • {item.location}</span>
                    </p>
                    <p style={{ margin: 0 }}>
                        <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
                        <span> – </span>
                        <span>
                            {item.endDate
                                ? format(parseISO(item.endDate), 'LLL yyyy')
                                : 'Present'}
                        </span>
                        {/* <span> • </span> */}
                        {/* <span>{getDuration(item.startDate, item.endDate)}</span> */}
                    </p>
                </div>
            )
        })
    }

    const getDuration = (startDate, endDate) => {
        const durationObj = intervalToDuration({
            start: parseISO(startDate),
            end: endDate ? parseISO(endDate) : new Date(),
        })

        let durationStr = ''

        if (durationObj.years > 1) {
            durationStr = `${durationObj.years} yrs `
        } else if (durationObj.years === 1) {
            durationStr = `${durationObj.years} yr `
        }

        durationStr += `${durationObj.months} mos`

        return durationStr
    }



    const { title, image } = props
    const description = `Here are a few of my honors, awards, scholarships and certifications</strong>.`

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={title} property="og:title" />
                <meta content={stripHtml(description)} name="description" />
                <meta content={stripHtml(description)} property="og:description" />
                <meta content="https://himudigonda.me/articles" property="og:url" />
                <meta content={`https://himudigonda.me${image}`} property="og:image" />
            </Head>

            <h2>Scholarships, Awards, and Certifications</h2>
            {renderAll()}
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

Honors.Layout = Base

export default Honors
