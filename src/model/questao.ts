import { embaralhar } from "@/functions/embaralhamento"
import RespostaModel from "./resposta"

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #respostas: RespostaModel[]
  #acertou: boolean
  

  //CONSTRUCTOR\/
  constructor(
    id: number,
    enunciado: string,
    respostas: any[],
    acertou = false,
    
  ) {
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas = respostas
    this.#acertou = acertou
    
  }

  get id() {
    return this.#id
  }

  get enunciado() {
    return this.#enunciado
  }

  get respostas() {
    return this.#respostas
  }

  get naoRespondida(){
    return !this.respondida
  }

  get respondida() {
    //implementar esse metodo
    for (let resposta of this.respostas) {
      if (resposta.revelada) {
        // console.log(resposta.revelada)
        return true
      }
    }
    return false
  }

  responderCom(indice: number): QuestaoModel {
    const acertou = this.#respostas[indice]?.certa
    const respostas = this.#respostas.map((resposta: any, i: any) => {
      const respostaSelecionada = indice === i
      const deveRevalar = respostaSelecionada || resposta.certa
      return deveRevalar ? resposta.revelar() : resposta
    })
    return new QuestaoModel(
      this.#id,
      this.#enunciado,
      respostas,
      acertou,
    )
  }

  embaralharRespostas(): QuestaoModel {
    let embaralhaRES = embaralhar(this.#respostas)
    // console.log(embaralhaRES)
    return new QuestaoModel(
      this.#id,
      this.#enunciado,
      embaralhaRES,
      this.#acertou,
    )
  }

  get acertou() {
    return this.#acertou
  }

  static criarUsandoObj(obj: QuestaoModel):QuestaoModel{
    const resp = obj.respostas.map( res => RespostaModel.criarUsandoObj(res))
    return new QuestaoModel(obj.id, obj.enunciado, resp, obj.acertou)
  }

  paraObjeto() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      acertou: this.#acertou,
      respondida: this.respondida,
      respostas: this.#respostas.map((res: any) => {
        return res.paraOutroObjeto()
      }),
    }
  }
}
