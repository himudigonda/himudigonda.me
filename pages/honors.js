import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'

function Honors() {
    return (
        <>
            <Head>
                <title>Honors</title>
            </Head>
            <div>
                <h1>Honors</h1>
                <p>Details about your honors.</p>
            </div>
        </>
    )
}

Honors.Layout = Base

export default Honors