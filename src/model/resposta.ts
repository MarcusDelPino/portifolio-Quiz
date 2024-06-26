export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static certa(valor: string) {
       return new RespostaModel(valor, true)
    }
    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor(): string {
        return this.#valor;
    }
    get certa(): boolean {
        return this.#certa;
    }
    get revelada(): boolean {
        return this.#revelada;
    }
                                                                                                                                                                                                
    revelar(){
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    static criarUsandoObj(obj: RespostaModel): RespostaModel{
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }
    paraOutroObjeto(): any{
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}