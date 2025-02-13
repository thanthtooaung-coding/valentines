"use client"

import { useEffect, useState } from "react"
import ThankYou from "./components/ThankYou"
import ValentineQuestion from "./components/ValentineQuestion"

function App() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    document.title = accepted ? "Yay! You're my Valentine 💖" : "Will you be my Valentine?";
  }, [accepted]);

  return (
    <div className="container">
      {accepted ? <ThankYou /> : <ValentineQuestion onAccept={() => setAccepted(true)} />}
    </div>
  )
}

export default App

