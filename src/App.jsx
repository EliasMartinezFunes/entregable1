import './App.css'
import quotes from "./assets/db/quotes.json"
import { getRandomElement } from './assets/utils/random.js'
import QuoteBox from './componets/QuoteBox'
import { useState } from 'react'

const bgs = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs));
 
  const handleChangeQuote = ( ) =>{
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(bgs));
  } 

  return (
    <main className={`App ${currentBg}`}>
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  );
}

export default App
