"use client"

import { useState } from "react"
import type React from "react"

interface ValentineQuestionProps {
  onAccept: () => void
}

const ValentineQuestion: React.FC<ValentineQuestionProps> = ({ onAccept }) => {
  const [noClicks, setNoClicks] = useState(0)
  const [noScale, setNoScale] = useState(1)
  const [yesScale, setYesScale] = useState(1)

  const minNoScale = 0.65
  const maxYesWidth = 550

  const gifs = [
    "assets/images/togepi-love.gif",
    "assets/images/togepi-happy.gif",
    "assets/images/togepi-sad-1.gif",
    "assets/images/togepi-sad-2.gif",
    "assets/images/togepi-crying.gif",
  ]

  const buttonMessages = ["No", "Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"]

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1)
    if (noScale > minNoScale) {
      setNoScale((prev) => prev - 0.1)
    }
    if (yesScale * 100 < maxYesWidth) {
      setYesScale((prev) => prev + 0.5)
    }
  }

  return (
    <div className="valentine-container">
      <img
        src={gifs[Math.min(noClicks, gifs.length - 1)] || "/placeholder.svg"}
        id="togepi-gif"
        alt="a cute picture of togepi"
      />
      <h1 id="message">Will you be my Valentine? (˶ᵔ ᵕ ᵔ˶)</h1>
      <div className="btn-container">
        <button id="yes-btn" onClick={onAccept} style={{ transform: `scale(${yesScale})` }}>
          Yes
        </button>
        <button
          id="no-btn"
          onClick={handleNoClick}
          style={{
            transform: `scale(${noScale})`,
            width: "auto",
            minWidth: buttonMessages[Math.min(noClicks, buttonMessages.length - 1)].length * 10 + "px",
          }}
        >
          {buttonMessages[Math.min(noClicks, buttonMessages.length - 1)]}
        </button>
      </div>
    </div>
  )
}

export default ValentineQuestion

