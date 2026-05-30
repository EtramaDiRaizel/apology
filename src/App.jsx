import React from 'react'
import data from '../wrapped_data.json'
import Slide1Title from './slides/Slide1Title'
import Slide2Overview from './slides/Slide2Overview'
import Slide3Keywords from './slides/Slide3Keywords'
import Slide4Nighttime from './slides/Slide4Nighttime'
import Slide5Apology from './slides/Slide5Apology'

export default function App() {
  const slides = [
    <Slide1Title />,
    <Slide2Overview data={data} />,
    <Slide3Keywords data={data} />,
    <Slide4Nighttime data={data} />,
    <Slide5Apology />,
  ]

  return (
    <div className="w-full bg-charcoal">
      <div className="max-w-4xl mx-auto">
        {slides.map((s, i) => (
          <section key={i} className="w-full py-12">
            {s}
          </section>
        ))}
      </div>
    </div>
  )
}
