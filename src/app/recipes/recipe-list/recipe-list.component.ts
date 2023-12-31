import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Holiday-Pistachio-Dessert_EXPS_TOHCA20_39630_E02_26_6b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
