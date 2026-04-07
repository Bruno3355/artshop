import Image from 'next/image'

export const ResponsiveImage = ({ src, alt}: {src: string, alt: string}) => (
    <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw,
    (max-width: 991px) 50vw,
    33vw
    "
    style={{objectFit: 'cover'}} />
)