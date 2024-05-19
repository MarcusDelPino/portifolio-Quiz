import {  } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

interface TemporizadorProps {
  key: any
  duracao: number
  tempoEsgotado: () => void
}

export default function Temporizador({
  duracao,
  tempoEsgotado,
  key
}: TemporizadorProps) {
  return (
    <div>
      <div className={`text-3xl `}>
        <CountdownCircleTimer
          duration={duracao}
          size={120}
          isPlaying
          onComplete={tempoEsgotado}
          colors={["#86e62d", "#F7B801", "#e73023", "#E73023"]}
          colorsTime={[10, 6, 3, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}
