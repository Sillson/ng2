import {Component} from 'angular2/core';
interface Beer {
  id: number;
  name: string;
  rating: number;
}
@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>Deschutes Beers</h2>
    <ul class="beers">
      <li *ngFor="#beer of beers"
        [class.selected]="beer === selectedBeer"
        [class.high-score]="beer.rating > 75"
        (click)="onSelect(beer)">
        <span class="badge">{{beer.rating}}</span> {{beer.name}}
      </li>
    </ul>
    <div *ngIf="selectedBeer">
      <h2>{{selectedBeer.name}} details!</h2>
      <div><label>id: </label>{{selectedBeer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedBeer.name" placeholder="name"/>
      </div>
      <div>
        <label>rating: </label>
        <input [(ngModel)]="selectedBeer.rating" placeholder="rating"/>
      </div>
    </div>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .beers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .beers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .beers li.selected:hover {
      color: white;
    }
    .beers li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .beers .text {
      position: relative;
      top: -3px;
    }
    .beers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
    .beers .high-score .badge {
      background-color: green;
    }
  `]
})
export class AppComponent {
  public title = 'G5 Kegalytics v2';
  public beers = BEERS;
  public selectedBeer: Beer;
  onSelect(beer: Beer) { this.selectedBeer = beer; }
}
var BEERS: BEER[] = [
  { "id": 11, "name": "Red Chair NWPA", "rating": 91 },
  { "id": 12, "name": "Abyss", "rating": 86 },
  { "id": 13, "name": "Inversion", "rating": 51 },
  { "id": 14, "name": "Bachelor Bitter", "rating": 81 },
  { "id": 15, "name": "Chain Breaker", "rating": 25 },
  { "id": 16, "name": "Mirror Pond", "rating": 74 },
  { "id": 17, "name": "Black Butter Porter", "rating": 68 },
  { "id": 18, "name": "Fresh Squeezed", "rating": 95 },
  { "id": 19, "name": "Chasin Freshies", "rating": 93 },
  { "id": 20, "name": "Hop Henge", "rating": 87 }
];
