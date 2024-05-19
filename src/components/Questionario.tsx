import QuestaoModel from "@/model/questao"
import Questao from "./Questao"
import Botao from "./Botao"
import {  } from "react"

interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irProPasso: () => void
}

export default function Questionario({
  questao,
  ultima,
  questaoRespondida,
  irProPasso,
}: QuestionarioProps) {
  const respostaFornecida = (indice: number) => {
    if (questao.naoRespondida) {
      questaoRespondida(questao.responderCom(indice))
    }
  }

  return (
      <div>
        <div className={`flex flex-col justify-center items-center h-screen`}>
          {questao ? (
            <Questao
              valor={questao}
              tempoPraResposta={60}
              respostaFornecida={respostaFornecida}
              tempoEsgotado={irProPasso}
            />
          ) : (
            false
          )}

          <div className="mt-5">
            <Botao
              onCLick={irProPasso}
              texto={ultima ? "Finalizar" : "Próxima"}
            />
          </div>
        </div>
      </div>
  )
}
