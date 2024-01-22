import { useState } from 'react'
import cookie from './assets/fortune-cookie.png'
import openCookie from './assets/opened-cookie.png'
import fortuneIcon from './assets/trevo-icon.png'
import Phrase from './Phrase.jsx'
import { Brazilian, English, Spanish } from './PhrasesList.jsx';
import './App.css'

const phrases = {
  English: English,
  Brazilian: Brazilian,
  Spanish: Spanish,
}

function App() {
  const [isCookieOpened, setCookieOpened] = useState(false)
  const [isPhrase, setPhrase] = useState('')
  const [isModelOpen, setModelOpen] = useState(false)
  const [language, setLanguage] = useState('English')

  const handleCookieClick = () => {
    setCookieOpened(true);
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);

    let randomPhrase = phrases[language][Math.floor(Math.random() * phrases[language].length)];
    console.log(randomPhrase);
    isPhrase ? setPhrase('') : setPhrase(randomPhrase);
  }

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setModelOpen(false)
  }
  const handleNewCookieClick = () => {
    setCookieOpened(false);
    setPhrase('');
  }
  const getIcon = (language) => {
    switch (language) {
        case 'English':
            return '🇺🇸';
        case 'Spanish':
            return '🇪🇸';
        case 'Brazilian':
            return '🇧🇷';
        default:
            return '';
    }
};

  return (
    <>
    { isCookieOpened == false && (
      <button className='language-button' onClick={() => setModelOpen(true)}>Select Language</button>
    )
    }
      <p>
        {getIcon(language)} - {language}
      </p>
      {isModelOpen && ( 
       <div className='model'>
        <button onClick={() => handleLanguageChange('English')}>English</button>
        <button onClick={() => handleLanguageChange('Brazilian')}>Portugues(Brazil)</button>
        <button onClick={() => handleLanguageChange('Spanish')}>Spanish</button>
       </div> 
      )}
      <div>
        <a href="#" target="" onClick={handleCookieClick}>
          <img src={isCookieOpened ? openCookie : cookie} className={isCookieOpened ? "opened-logo" : "logo"} alt="Cookie image" />
        </a>
      </div>
      {isCookieOpened && <button onClick={handleNewCookieClick}>Try a new fortune cookie <img src={fortuneIcon} alt="Fortune icon" /></button>}
      <div className="card">
        <p>
          {isCookieOpened && (
            <Phrase phrase={isPhrase} language={language} />
          )}
        </p>
      </div>
    </>
  )
}

export default App
