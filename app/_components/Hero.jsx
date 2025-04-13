import React from 'react'
import { Button } from '@/components/ui/button'
function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24'>
        <h2 className="font-bold text-6xl text-center">Shorts generator</h2>
        <p className='mt-4 text-2xl text-center text-gray-500'>AI generated scripts, images,voiceovers in minutes 🍏</p>
        <div className='mt-7 gap-8 flex'>
          <Button size="lg" variant="secondary">Explore</Button>
          <Button size="lg" >Get started</Button>
        </div>
    </div>
  )
}

export default Hero