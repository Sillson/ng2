System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, BEERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'G5 Kegalytics v2';
                    this.beers = BEERS;
                }
                AppComponent.prototype.onSelect = function (beer) { this.selectedBeer = beer; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>Deschutes Beers</h2>\n    <ul class=\"beers\">\n      <li *ngFor=\"#beer of beers\"\n        [class.selected]=\"beer === selectedBeer\"\n        [class.high-score]=\"beer.rating > 75\"\n        (click)=\"onSelect(beer)\">\n        <span class=\"badge\">{{beer.rating}}</span> {{beer.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedBeer\">\n      <h2>{{selectedBeer.name}} details!</h2>\n      <div><label>id: </label>{{selectedBeer.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedBeer.name\" placeholder=\"name\"/>\n      </div>\n      <div>\n        <label>rating: </label>\n        <input [(ngModel)]=\"selectedBeer.rating\" placeholder=\"rating\"/>\n      </div>\n    </div>\n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .beers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .beers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .beers li.selected:hover {\n      color: white;\n    }\n    .beers li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .beers .text {\n      position: relative;\n      top: -3px;\n    }\n    .beers .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n    .beers .high-score .badge {\n      background-color: green;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            BEERS = [
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
        }
    }
});
//# sourceMappingURL=app.component.js.map