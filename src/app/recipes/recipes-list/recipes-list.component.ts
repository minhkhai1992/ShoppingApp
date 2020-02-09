import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://images-gmi-pmc.edge-generalmills.com/5efef778-f865-4ff6-bc3b-89ec7a62dc93.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://images-gmi-pmc.edge-generalmills.com/5efef778-f865-4ff6-bc3b-89ec7a62dc93.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
