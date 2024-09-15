import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
import { HangmanWord } from "./components/HangmaWord"
import { Keyboard } from "./components/Keyboard"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter=> !words.includes(letter))

  console.log(wordToGuess);

  const addGuessLetter = useCallback((letter: string)=>{
    if(guessedLetters.includes(letter)) return

    setGuessedLetters(currentLtter => [...currentLtter,letter])

  },[guessedLetters])

  // function addGuessLetter(letter: string){
  //   if(guessedLetters.includes(letter)) return

  //   setGuessedLetters(currentLtter => [...currentLtter,letter])

  // }

  useEffect(()=>{
    const handler = (e: KeyboardEvent)=>{
      e.preventDefault()

      const key= e.key
      if(!key.match(/^[a-z]$/)) return

      addGuessLetter(key)

    }
    document.addEventListener("keypress",handler)
    return ()=>{
      document.removeEventListener("keypress",handler)
    }
  })
  return (
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}>
        <div style={{
          fontSize:"2rem",
          textAlign:"center"
          }}>
            Lose win
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div style={{alignSelf:"stretch"}}>
        <Keyboard />
        </div>
      </div>
  )
}

export default App
