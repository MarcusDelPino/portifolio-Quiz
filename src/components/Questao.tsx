import QuestaoModel from "@/model/questao"
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"
import {  } from "react"

const letras = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4f2" },
  { valor: "D", cor: "#BCE596" },
]

interface QuestaoProps {
  valor: QuestaoModel
  respostaFornecida: (indice: number) => void
  tempoEsgotado: () => void
  tempoPraResposta?: number
}

export default function Questao({
  valor,
  respostaFornecida,
  tempoEsgotado,
  tempoPraResposta,
}: QuestaoProps) {
  const renderizar = () => {
    return valor.respostas.map((resposta: any, ind: number) => {
      return (
        <Resposta
        key={`${valor.id}-${ind}`}
          resp={resposta}
          corFundoLetra={letras[ind].cor}
          indice={ind}
          letra={letras[ind].valor}
          respostaFornecida={respostaFornecida}
        />
      )
    })
  }

  return (
    
      <div className='flex flex-col items-center'>
        <div className='flex text-6xl text-white justify-center items-center w-[80%]'>
          <Enunciado texto={valor.enunciado} />
        </div>
        <div className='flex justify-center items-center p-2 mt-5'>
          <Temporizador
            key={valor.id}
            duracao={tempoPraResposta ?? 10}
            tempoEsgotado={tempoEsgotado}
          />
        </div>
        <div className='flex flex-col justify-center items-center mt-6 w-[80%]'>
          {renderizar()}
        </div>
      </div>
    
  )
}
