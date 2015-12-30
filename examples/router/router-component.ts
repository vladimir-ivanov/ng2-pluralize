import {Component, Inject} from "angular2/core";
import {NgFor} from "angular2/common";
import {RouteConfig,  ROUTER_DIRECTIVES, Router} from "angular2/router";
import {RouterLink} from "angular2/src/router/router_link";
import {RouterOutlet} from "angular2/src/router/router_outlet";
import {NgPluralizeExampleComponent} from "../ng-pluralize-example-component";

declare type Routes = Array<{
    path: string;
    component: any,
    as: string;
}>;

const routes:Routes = [
    {path: "/ng-pluralize", component: NgPluralizeExampleComponent, as: "NgPluralize"}
];

@Component({
    selector: "mainroot",
    templateUrl: "./router/navigation.html",
    directives: <any>[ROUTER_DIRECTIVES, NgFor, RouterLink, RouterOutlet]
})
@RouteConfig(<any>routes)
export class RouterComponent {
    header:string = "Home";

    constructor(@Inject(Router)router:Router) {
        router.subscribe(href => {
            let route = (<any>routes).find(r => r.path === "/" + href);

            this.header = !!route ? route.as : "NgPluralize";
        });
    }
}
