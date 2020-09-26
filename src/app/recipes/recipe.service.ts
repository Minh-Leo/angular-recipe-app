import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "Description test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/szechuan-beef-horizontal-1530892577.jpg?resize=768:*",
      [new Ingredient("Meat", 1), new Ingredient("Rice", 20)]
    ),
    new Recipe(
      "Test Recipe 2",
      "Description 2 test",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/szechuan-beef-horizontal-1530892577.jpg?resize=768:*",
      [new Ingredient("Chicken", 31), new Ingredient("Bun", 8)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // return a copy of the array, without slice it return a reference
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
