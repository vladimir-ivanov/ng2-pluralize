import {Input, OnInit, Component} from "angular2/core";

@Component({
    selector: "ngPluralize",
    template: `<span>{{content}}</span>`
})
export class NgPluralize implements OnInit {
    @Input("count")
    count;
    @Input("when")
    when;
    @Input("offset")
    offset;

    content;

    ngOnInit() {
        let when = this.when;
        let count = this.count;
        let oneOffset = this.offset ? this.offset + 1 : 1;
        let remainingOffset = this.offset ? count - this.offset : count;
        let content = when[0] || "";

        if (this.when) {
            if (when[count]) {
                content = when[count];

            } else {
                if (count === oneOffset && when.one) {
                    content = when.one;
                } else {
                    content = when.other || "";
                }
            }

            content = content.replace("{}", remainingOffset);
        }

        this.content = content;
    }
}