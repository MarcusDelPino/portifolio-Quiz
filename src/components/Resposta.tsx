import RespostaModel from "@/model/resposta"

interface RespostaProps {
  resp: RespostaModel
  indice: number
  letra: string
  corFundoLetra: string
  respostaFornecida: (indice: number) => void
}

export default function Resposta({
  resp,
  indice,
  letra,
  corFundoLetra,
  respostaFornecida,
}: RespostaProps) {
  // console.log(respostaRevelada)
  return (
    <div
      className='flex w-[80%] [perspective:1000px] '
      onClick={() => respostaFornecida(indice)}
    >
      <div className={`w-[100%] h-[100px] m-2  relative transition-all duration-500 [transform-style:preserve-3d] ${resp.revelada ? "rotate-y-180" : ""}`}>
        <div
          className="items-center absolute inset-0 flex w-full h-full rounded-lg shadow-xl bg-white p-3  gap-5 [backface-visibility:hidden]"
        >
          <div
            className={`flex bg-[${corFundoLetra}] h-14 w-14 rounded-full justify-center items-center text-2xl `}
          >
            {letra}
          </div>
          <div className={`flex text-lg text-slate-600 items-center `}>
            {resp.valor}
          </div>
        </div>
        <div className={`absolute w-full h-full inset-0 flex rotate-y-180 [backface-visibility:hidden]`}>
          {resp.certa ? (
            <div
              className={`flex text-white flex-col justify-center items-center bg-green-700 w-[100%]  rounded-lg shadow-xl p-3   gap-3 `}
            >
              <div>A resposta certa é...</div>
              <div className={``}>{resp.valor}</div>
            </div>
          ) : (
            <div
              className={`flex text-white flex-col justify-center items-center bg-red-700 w-[100%]  rounded-lg shadow-xl p-3  gap-3 `}
            >
              <div>A resposta informada está errada...</div>
              <div className={``}>{resp.valor}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// bg-[#F2C866]
// bg-[#F266BA]
// bg-[#85D4f2]
// bg-[#BCE596]
//
