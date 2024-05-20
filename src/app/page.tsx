"use client"
import Questionario from "@/components/Questionario"
import QuestaoModel from "@/model/questao"
import RespostaModel from "@/model/resposta"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import Loading from "./Loading"

const questaoMock = new QuestaoModel(1, "Melhor Cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Roxo"),
])

const BASE_URL = `https://projeto-quiz-nine.vercel.app/api`

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel | undefined>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  const carregarIdsQuestoes = async () => {
    const response = await fetch(`${BASE_URL}/questionario`)
    const ids = await response.json()
    console.log(ids)
    return setIdsQuestoes(ids)
  }
  const carregarQuestoes = async (idQuestao: number) => {
    const response = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await response.json()
    const novaQuestao = QuestaoModel.criarUsandoObj(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestoes(idsQuestoes[0])
  }, [idsQuestoes])

  useEffect(() => {
    carregarIdsQuestoes()
  }, [])

  const questaoRespondida = (questaoRespondida: QuestaoModel) => {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    console.log(respostasCertas + (acertou ? 1 : 0))
  }
  const idProximaPergunta = () => {
    const proximoIndice = questao? idsQuestoes.indexOf(questao.id) + 1 : -1;
    return idsQuestoes[proximoIndice]
  }
  const irProximoPasso = () => {
    const proximoId = idProximaPergunta()
    proximoId ? irProximaQuestao(proximoId) : finalizar()
  }

  const irProximaQuestao = (proximoId: number) => {
    carregarQuestoes(proximoId)
  }

  const createQueryString = useCallback(
    (portas: string, value: string, acertadas: string, value2: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(portas, value)
      params.set(acertadas, value2)

      return params.toString()
    },
    [searchParams]
  )

  const finalizar = () => {
    router.push(
      `/resultado/` +
        `?` +
        `${createQueryString(
          "portas",
          `${idsQuestoes.length}`,
          "acertadas",
          `${respostasCertas}`
        )}`
    )
  }

  const ultimaPerguntas = () => {
    const proximoIndice = questao? idsQuestoes.indexOf(questao.id) + 1 : -1;
    if (proximoIndice === idsQuestoes.length) {
      return true
    }
    {
      return false
    }
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={ultimaPerguntas()}
      questaoRespondida={questaoRespondida}
      irProPasso={irProximoPasso}
    />
  ) : (
    <Loading />
  )
}

// const questaoRef = useRef<QuestaoModel>(questao)
// useEffect(() => {
//   questaoRef.current = questao
// }, [questao])
// const tempoEsgotado = () => {
//   if (questaoRef.current.naoRespondida) {
//     setQuestao(questaoRef.current.responderCom(-1))
//   }
// }

// const tempoEsgotado = () => {
//   if (questao.naoRespondida) {
//     setQuestao(questao.responderCom(-1))
//   }
// }

// const resp = (indice: number) => {
//   console.log(indice)
//   setQuestao(questao.responderCom(indice))
// }
