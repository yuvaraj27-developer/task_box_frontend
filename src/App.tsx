import TitleLogoSVG from './SVG/TitleLogoSVG';
import Navbar from './components/navbar/Navbar';
import './styles/App.scss'

function App() {
  return (
    <>
      <Navbar />
      <section className='title-container'>
        <div>
          <TitleLogoSVG className='title-logo'/>
        </div>
        <div>
          <h1>Task Box</h1>
          <p>Unbox your Productivity</p>
        </div>
      </section>
      <footer>

      </footer>
    </>
  )
}

export default App
