import TitleLogoSVG from './SVG/TitleLogoSVG';
import './styles/App.scss'

function App() {
  return (
    <div className='title-container'>
      <div>
        <TitleLogoSVG className='title-logo'/>
      </div>
      <div>
        <h1>Task Box</h1>
        <p>Unbox your Productivity</p>
      </div>
    </div>
  )
}

export default App
