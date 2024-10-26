import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
      <Program />
      <About/>
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' title='what Student Says' />
      <Testimonial />

      </div>
    </div>
  )
}
 
export default App
