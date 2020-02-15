import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 9, name: "Spider-Man" },
      { id: 10, name: "Captain Marvel" },
      { id: 11, name: "Hulk" },
      { id: 12, name: "Moon Girl" },
      { id: 13, name: "Black Panther" },
      { id: 14, name: "Thanos" },
      { id: 15, name: "Iron Man" },
      { id: 17, name: "Black Widow" },
      { id: 18, name: "Wolverine" },
      { id: 19, name: "Invisible Woman" }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
