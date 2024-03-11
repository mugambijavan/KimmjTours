import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Breathtaking landscapes, diverse cultures, and rich heritage</h2>
          
        </div>

        <div className="flex flex-1 items-center justify-end">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gTEXJsw62iU?si=rZ1Wg8dJjt-aYKU2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </div>
    </section>
  )
}

export default GetApp