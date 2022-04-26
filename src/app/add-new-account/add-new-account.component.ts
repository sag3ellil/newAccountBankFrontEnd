import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import {Transaction} from '../models/Transaction';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.css']
})
export class AddNewAccountComponent implements OnInit {

  constructor(private apiService:ApiService,private formBuilder: FormBuilder,) {
    this.form = this.formBuilder.group(
      {
        number:['']
      }
    )
   }
   transaction:Transaction= new Transaction(null,null,null,null);
   owner:string
   msg:string=''
   form: FormGroup = new FormGroup({
    number: new FormControl(''),
   
  });

  displayRes:boolean=false
  ngOnInit(): void {
    
    this.displayRes=false
    
  }

  onSubmit()
  {
    if (this.form.invalid) {
      return;
    }
    this.displayRes=true
    this.apiService.addNewAccountToExistedCostumer(this.form.value.number).subscribe(
      (      result: Transaction) => {
      console.log("result add",result)
      this.owner=result.account.costumer.name;
      this.transaction.account= result.account;
      this.transaction.amount= result.amount;
      this.transaction.dateTransaction= result.dateTransaction;
      this.transaction.id= result.id;
      this.msg="Creation of new account success !"
     
      },(err) => {
        this.msg="Something went wrong !"
      }
    )
  }


}
