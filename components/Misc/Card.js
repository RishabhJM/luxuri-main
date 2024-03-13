import Image from 'next/image'
import React from 'react'

export default function Card({width,height,src,alt="", borderRadius}) {
  return (
    <div>
        <Image width={width} height={height} src={src} alt={alt}></Image>
    </div>
  )
}
