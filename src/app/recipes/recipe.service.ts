import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    // return a copy of the array, without slice it return a reference
    return this.recipes.slice();
  }
}
