import { Component, OnInit } from '@angular/core';
import {InAndOutDishesService} from '../services/in-and-out-dishes.service'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  originalDishArray:Array<any>;

  constructor(public readWriteDishes:InAndOutDishesService) { }


getDishes(){
  this.readWriteDishes.getDishes()
  .subscribe((res)=>{
    this.originalDishArray = res.reverse();
  })


}



  ngOnInit() {
    this.getDishes();
  }

}
