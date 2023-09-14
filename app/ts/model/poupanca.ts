class Poupanca extends Conta{

    private _dataAniversario: Date;

    constructor(numero: string, saldo: number) {
        super(numero, saldo);
        this._dataAniversario = new Date();
    }

    get dataAniversario(): Date {
        return this._dataAniversario;
    }

    set dataAniversario(value: Date) {
        this._dataAniversario = value;
    }

    atualizarSaldoAniversario(){
        const hoje = new Date();
        if (hoje.getDay() === this.dataAniversario.getDay()) {
            this.creditar(this.saldo * 0.02);
        }
    }
}
