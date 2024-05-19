import { NextRequest, NextResponse } from "next/server"
import { questoes } from "../bancodequestoes/bancoDeQuestoes"
import { embaralhar } from "@/functions/embaralhamento"
type CombineRequest = Request & NextRequest;
type CombineResponse = Response & NextResponse;
export async function GET(res: CombineRequest, req: CombineResponse) {
    const ids = questoes.map(id => id.id)
  return NextResponse.json(embaralhar(ids))
}
