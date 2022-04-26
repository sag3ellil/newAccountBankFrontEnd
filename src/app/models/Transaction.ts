import { Account } from "./Account";

export class Transaction {
    id: number;
    dateTransaction!: string;
    amount!: number;
    account: Account;

    constructor(id:number,dateTransaction:string,amount:number,account:Account)
    {
        this.account=account;
        this.id=id;
        this.amount=amount;
        this.dateTransaction=dateTransaction;
    }

    
    
}