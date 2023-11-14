import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerSerService } from '../customer-ser.service';
import { FoodDTO } from '../food-dto';

@Component({
  selector: 'app-customerorder',
  templateUrl: './customerorder.component.html',
  styleUrls: ['./customerorder.component.css']
})
export class CustomerorderComponent implements OnInit {
  msg:any="";
  fdto:FoodDTO=new FoodDTO();
  constructor(private customerSerService:CustomerSerService,private router:Router){}
  ngOnInit(): void {}

  custorder(){
    this.customerSerService.customerorder(this.fdto).subscribe(data=>{this.msg=data;});
  }


}
