import { NextRequest, NextResponse } from "next/server"
import { questoes } from "../../bancodequestoes/bancoDeQuestoes"
import { headers } from "next/headers"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = +params.id
  const idSelecionado = questoes.filter((x) => x.id === id)
  // console.log(idSelecionado.length)

  if (idSelecionado.length === 1) {
    const  novoRound = idSelecionado[0].embaralharRespostas()
    return NextResponse.json(novoRound.paraObjeto()
, {
        status: 200,
        statusText: "Sucessful",
        headers: {
            "content-type": "application/json"
        }
    })
  }else {
    return new NextResponse("Houve um erro na pesquisa da pergunta", {
        status:404,
        statusText: "Not Found",
        headers: {
            "content-type": "application/json"
        }
    })
  }
}

export async function POST(req: NextRequest, res: NextResponse) {}
