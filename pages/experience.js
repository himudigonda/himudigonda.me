import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import stripHtml from '../lib/strip-html'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import items from '../data/about'

export async function getStaticProps() {
    return {
        props: {
            title: 'Experience // Himansh Mudigonda',
            tagline: 'Growth. Impact. Vision.',
            primaryColor: 'pink', secondaryColor: 'purple',
        },
    }
}

function Experience(props) {
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
                        <span> • </span>
                        <span>{getDuration(item.startDate, item.endDate)}</span>
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

    return (
        <>
            <head>
                <title>{title}</title>
                <meta content={title} property="og:title" />
                <meta content="https://himudigonda.me/experience" property="og:url" />
            </head>
            <h2>Career</h2>
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

Experience.Layout = Base

export default Experience
