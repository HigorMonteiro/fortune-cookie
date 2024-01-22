import { useState } from 'react'
import cookie from './assets/fortune-cookie.png'
import openCookie from './assets/opened-cookie.png'
import fortuneIcon from './assets/trevo-icon.png'
import './App.css'

function App() {
  const [isCookieOpened, setCookieOpened] = useState(false)

  const handleCookieClick = () => {
    setCookieOpened(true);
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
  }

  const handleNewCookieClick = () => {
    setCookieOpened(false);
  }

  return (
    <>
      <div>
        <a href="#" target="" onClick={handleCookieClick}>
          <img src={isCookieOpened ? openCookie : cookie} className={isCookieOpened ? "opened-logo" : "logo"} alt="Cookie image" />
        </a>
      </div>
      {isCookieOpened && <button onClick={handleNewCookieClick}>Try a new fortune cookie <img src={fortuneIcon} alt="Fortune icon" /></button>}
      <div className="card">
        <p>
          {isCookieOpened && 'You will find a fortune cookie'}
        </p>
      </div>
    </>
  )
}

export default App
