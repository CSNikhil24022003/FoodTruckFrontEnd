import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerSerService } from '../customer-ser.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods:Food[]=[];
  food:Food=new Food();
  constructor(private customerSerService:CustomerSerService,private router:Router ){}
 

  ngOnInit():void
  {
    this.getFoods();
  }
  getFoods(){
    this.customerSerService.getMenu().subscribe(
      data=>{
        this.foods=data;
      });
  }




}
