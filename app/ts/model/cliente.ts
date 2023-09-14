class Cliente {

    private _nome:string;
    private _cpf:number;
    private _conta:Conta;

    constructor(nome:string, cpf:number, conta:Conta=undefined) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome:string) {
        this._nome = nome;
    }

    get cpf(): number {
        return this._cpf;
    }

    set cpf(cpf:number) {
        this._cpf = cpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(conta:Conta) {
        this._conta = conta;
    }

    toString():string {
        return `Cliente ${this._nome} | CPF ${this._cpf} | Conta ${this._conta}`;
    }

}