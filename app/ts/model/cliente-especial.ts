class ClienteEspecial extends Cliente {

    private _dependentes:Array<Cliente>;

    constructor(nome:string, cpf:number, conta:Conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }

    get dependentes(): Array<Cliente> {
        return this._dependentes;
    }

    inserir(cliente:Cliente): void  {
        this._dependentes.push(cliente);
    }

    remover(cpf:number): void  {
        const ClienteARemover:Cliente = this.pesquisar(cpf);
        if (ClienteARemover) {
            const idxCliente: number = this._dependentes.indexOf(ClienteARemover);
            if (idxCliente > -1) {
                this._dependentes.splice(idxCliente, 1);
            }
        }
    }

    pesquisar(cpf:number): Cliente  {
        return this._dependentes.find(cliente => cliente.cpf == cpf);
    }

    toString():string {
        return `Cliente Especial ${super.nome} | CPF ${super.cpf} | Conta ${super.conta} | Dependentes ${this.dependentes}`;
    }

}