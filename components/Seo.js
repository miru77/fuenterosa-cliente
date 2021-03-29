import React from 'react'
import Head from "next/head"

export default function Seo({title, description}) {
    return (
        <Head>
            <title>{title}</title>
            <meta property="description" content={description}/>
            
        </Head>
    )
}

Seo.defaultProps = {
    title: "FuenteRosa - Tu decoración favorita",
    description: "Tus cajas de maderas exclusivas, mates, tablas, y articulos varios de decoración"
}
