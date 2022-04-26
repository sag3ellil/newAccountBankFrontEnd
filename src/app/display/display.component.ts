import { ApiService } from '../Services/api.service';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Account } from '../models/Account';
import { Costumer } from '../models/Costumer';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayedColumns: string[] = ['accountId', 'amount', 'transactionAmount', 'dateTransaction'];
  dataSource :any; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
 

  ELEMENT_DATA:Account[]=[]
  constructor(private apiService:ApiService) { }
  msg:string = ''
  name:string;
  surname:string;
  balance:number;
  ngOnInit(): void {
    this.msg=''
    this.apiService.getCostumerDetails().subscribe(
      (      result: Costumer) => {
      console.log("result ",result)
      this.ELEMENT_DATA =result.accounts
      this.name=result.name;
      this.surname=result.surname;
      this.balance=result.balance;
      this.dataSource =new MatTableDataSource<Account>(this.ELEMENT_DATA);

      this.dataSource.paginator = this.paginator;
      }
      , (err)=> { this.msg="probably the api is not lunched"}
    )
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
