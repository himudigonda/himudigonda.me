import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import sc_items from '../data/scholarships'
import awd_items from '../data/awards'

export async function getStaticProps() {
    return {
        props: {
            title: 'Honors// Himansh Mudigonda',
            tagline: 'Respect. Power. Banana.',
            image: '/static/images/articles-bw.jpg',
            primaryColor: 'red', secondaryColor: 'green'
        },
    }
}

function Honors(props) {
    const renderSC = () => {
        return sc_items.map((item, index) => {
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

    const renderAwd = () => {
        return awd_items.map((item, index) => {
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
                <meta content="https://himudigonda.me/honors" property="og:url" />
            </Head>

            <h2>Scholarships</h2>
            {renderSC()}
            <h2>Awards</h2>
            {renderAwd()}


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
