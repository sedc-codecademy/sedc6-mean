import { Component, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: "authors-status",
    templateUrl: "./authors-status.html"
})
export class AuthorsStatusComponent implements OnDestroy {

    subscriptions: Subscription[] = [];

    constructor(private route: ActivatedRoute) {
        this.subscriptions.push(
            this.route.queryParams.subscribe(qparams => {
                console.log("[Status] detected route change");
            })
        );
    }

    @Input() total: number;
    @Input() first: number;
    @Input() last: number;

    ngOnDestroy() {
        console.log("[Status] I've ceased to be");
        for (const subst of this.subscriptions) {
            subst.unsubscribe();
        }
    }
}
