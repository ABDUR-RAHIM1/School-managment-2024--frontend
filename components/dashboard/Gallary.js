import Image from 'next/image'
import React from 'react'

export default function Gallary(props) {
    const { title, photo } = props.gallary
    return (
        <div>
            <h2>{title}</h2>
            <Image
                src={photo}
                blurDataURL={photo}
                width={50}
                height={50}
                alt='gallary'
            />
        </div>
    )
}
