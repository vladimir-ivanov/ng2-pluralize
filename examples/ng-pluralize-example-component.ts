import {Component, Inject, OnInit} from "angular2/core";
import {NgFor, NgStyle} from "angular2/common";
import {NgPluralize} from "../src/ng-pluralize";

@Component({
    selector: "ngPluralizeExample",
    directives: <any>[NgPluralize],
    templateUrl: "./ng-pluralize-examples.html"
})

export class NgPluralizeExampleComponent {
    person1="Igor";
    person2="Misko"
}
