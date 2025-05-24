import LandingScreenContainer from './components/landing_screen/LandingScreenContainer';
import Navbar from './components/navbar/Navbar';
import './styles/App.scss'

function App() {
  return (
    <>
      <Navbar />
      <section className='section-container'>
        <LandingScreenContainer />
      </section>
      <footer>
        {/* This needs to be  */}
      </footer>
    </>
  )
}

export default App
