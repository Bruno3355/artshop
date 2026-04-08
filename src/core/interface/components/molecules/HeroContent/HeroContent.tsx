import { Button } from '@/components/ui/button'
import React from 'react'

interface Props  {
    className?: string;
}

export default function HeroContent({className}: Props) {
  return (
    <div className={`${className} px-14 py-16 bg-amber-50/30 rounded-4xl flex flex-col gap-y-card-gap`}>
        <h4 className="uppercase font-bold">Exclusive collection 2026</h4>
        <div>
        <h3 className="text-5xl">Art that <span className='italic text-accent-foreground'>transcends</span> centuries</h3>
        <span>Carefully curated paintings, vases, and rare pieces to collect what time has made precious.</span>
        </div>
        <Button>Explore Gallery</Button>
    </div>
  )
}
