import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "Description test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/szechuan-beef-horizontal-1530892577.jpg?resize=768:*"
    ),
    new Recipe(
      "Test Recipe 2",
      "Description 2 test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/szechuan-beef-horizontal-1530892577.jpg?resize=768:*"
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
