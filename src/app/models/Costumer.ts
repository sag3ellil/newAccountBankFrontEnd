import { Account } from "./Account";

export class Costumer {
    CostumerID: number;
    name!: string;
    surname!: string;
    accounts: Account[];
    balance: number;
    constructor(CostumerID: number,
        name: string,
        surname: string,
        balance: number,
        accounts: Account[]  )
    {                
        this.name  = name;
        this.CostumerID=CostumerID;
        this.accounts=accounts;
        this.surname=surname;     
        this.balance=balance; 
    }
}