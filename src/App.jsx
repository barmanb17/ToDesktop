import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Companies from './components/Companies'
import HowItWorks from './components/HowItWorks'
import BentoGrid from './components/BentoGrid'
import FeatureLine from './components/FeatureLine'
import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials2'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'

function App() {


  return (
<div>
  <Navbar/>
  <Hero/>
  <Companies/>
  <HowItWorks/>
  <BentoGrid/>
  <FeatureLine/>
  <Testimonials/>
  <Testimonials2/>
  <Pricing/>
  <FAQs/>
</div>
  )
}

export default App
