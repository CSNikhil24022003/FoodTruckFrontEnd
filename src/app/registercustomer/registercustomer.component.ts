import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{Food} from '../food';
import { Customer } from '../customer';
import { CustomerSerService } from '../customer-ser.service';



@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {
  ngOnInit(): void {}
  customer:Customer=new Customer();
  constructor(private customerSerService:CustomerSerService,private router:Router){}
  msg:any="";
  onSubmit(){
    this.saveCustomer();
  }
  saveCustomer(){
    this.customerSerService.registercustomer(this.customer).subscribe(data=>{this.msg=data;});
  }
  

}
