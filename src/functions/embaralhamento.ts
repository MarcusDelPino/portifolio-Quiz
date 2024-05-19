import { questoes } from "@/app/api/bancodequestoes/bancoDeQuestoes"

export const embaralhar = (ids: any) => {
  const dataNum = ids
    .map((id: number) => {
      return {
        valor: id,
        aleNum: Math.round(Math.random() * ids.length),
      }
    })
    .sort((a: any, b: any) => a.aleNum - b.aleNum)
    .map((sorteado: any) => sorteado.valor)
  // console.log(dataNum)
  return dataNum
}
