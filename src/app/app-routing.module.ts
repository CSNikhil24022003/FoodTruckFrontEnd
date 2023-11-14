import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
const routes: Routes = [
  {path:'getFoods',component:FoodListComponent},
  {path:'orderFood',component:CustomerorderComponent},
  {path:'registerCustomer',component:RegistercustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
