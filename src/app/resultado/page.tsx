import Botao from "@/components/Botao"
import Estatisticas from "@/components/Estatisticas"
import {  } from "react"

export default function Resultado({
  searchParams,
}: {
  searchParams: { portas: string; acertadas: string }
}) {
  const total = +searchParams.portas
  const certas = +searchParams.acertadas

  const percentual = Math.round((certas / total) * 100)

  return (
      <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <h1 className='text-white text-6xl mt-10'>Resultados</h1>
        <div className={`flex gap-56 mt-3`}>
          <Estatisticas texto='Perguntas' valor={total} />
          <Estatisticas texto='Certas' valor={certas} corFundo='bg-[#9CD2A4]' />
          <Estatisticas
            texto='Percentual'
            valor={`${percentual}%`}
            corFundo='bg-[#DE6A33]'
          />
        </div>
        <Botao texto='Tentar Novamente' href="/" />
      </div>
  )
}
