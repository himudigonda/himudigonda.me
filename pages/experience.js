// experience.js

import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { items } from '../data/about'
import { format, parseISO, intervalToDuration } from 'date-fns'

function Experience() {
    const renderAll = () => {
        return items.map((item, index) => {
            return (
                <div style={{ marginBottom: 40 }} key={index}>
                    <h3>{item.jobTitle}</h3>
                    <p style={{ margin: 0 }}>
                        <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
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

    return (
        <>
            <Head>
                <title>Experience</title>
            </Head>
            <div>
                <h1>Experience</h1>
                {renderAll()}
            </div>
        </>
    )
}

Experience.Layout = Base

export default Experience