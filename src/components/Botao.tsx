import Link from "next/link"
import {  } from "react"

interface BotaoProps {
  texto: string
  href?: string
  onCLick?: (e: any) => void
}

export default function Botao({ texto, href, onCLick }: BotaoProps) {
  const renderBotao = () => {
    return (
      <button
        onClick={onCLick}
        className={`px-10 py-5 rounded-md text-white shadow-md transition ease-in-out delay-150 bg-purple-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
        duration-300`}
      >
        {texto}
      </button>
    )
  }
  return href ? (
      <Link href={href} passHref>
        {renderBotao()}
      </Link>
  ) : (
    renderBotao()
  )
}
