interface EstatisticaProps {
  valor: any
  texto: string
  corFundo?: string
  corFonte?: string
}

export default function Estatisticas({
  valor,
  texto,
  corFundo,
  corFonte,
}: EstatisticaProps) {
  return (
    <div >
      <div className={` flex flex-col items-center gap-4`}>
        <div
          className={` flex justify-center items-center rounded-full  ${corFundo ? `${corFundo}` : "bg-[#FDD60f]"  } ${
            corFonte ?? "text-[#333]"
          } h-40 w-40 text-5xl`}
        >
          {valor}
        </div>
        <div className={``}>{texto}</div>
      </div>
    </div>
  )
}
