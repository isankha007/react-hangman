import { useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
// import { HangmanWord } from "./components/HangmaWord"
// import { Keyboard } from "./components/Keyboard"

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  console.log(wordToGuess);
  return (
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        justifyContent:"center",
        alignItems: "center",
      }}>
        <div style={{
          fontSize:"2rem",
          textAlign:"center"
          }}>
            Lose win
        </div>
        <HangmanDrawing />
        {/* <HangmanWord />
        <Keyboard /> */}
      </div>
  )
}

export default App
