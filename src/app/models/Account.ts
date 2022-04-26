import { Costumer } from "./Costumer";
import { Transaction } from "./Transaction";

export class Account {
    id: number;
    costumer!: Costumer;
    amount!: number;
    transaction: Transaction[];
    constructor( id: number,
        costumer: Costumer,
        amount: number,
        transaction: Transaction[] )
    {                
        this.id  = id;
        this.costumer=costumer;
        this.amount=amount;
        this.transaction=transaction;        
    }
}