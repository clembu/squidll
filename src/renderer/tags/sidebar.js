'use strict';
import * as riot from 'riot';
import { STORY_EDIT,STORY_NAV } from "common/events";

riot.tag('sidebar',
`<nav class="c-nav c-nav--light o-panel">
    <virtual each={opts.knots}>
        <div class="c-nav__item"
            onclick="{parent.onselectknot}">
            <icon icon="{expanded?'chevron-down':'chevron-right'}" onclick="{parent.ontoggle}"></icon>
            {label}
        </div>
        <virtual each={stitches} if={expanded}>
            <div class="c-nav__item" onclick="{parent.onselectstitch}" style="padding-left: 50px">
                {label}
            </div>
        </virtual>
        <div class="c-nav__item" show="{parent.promptstitch && label == parent.selected}" style="padding-left: 50px">
            <div class="c-input-group c-input-group--rounded">
                <div class="o-field">
                    <input ref="stitchname_{label}" class="c-field" type="text" placeholder="new stitch"></input>
                </div>
                <button class="c-button c-button--error" onclick="{parent.cancelstitch}"><icon icon="close"></icon></button>
                <button class="c-button c-button--success" onclick="{parent.confirmstitch}"><icon icon="check"></icon></button>
            </div>
        </div>
    </virtual>
    <div class="c-nav__item" show={promptknot}>
        <div class="c-input-group c-input-group--rounded">
            <div class="o-field">
                <input ref="knotname" class="c-field" type="text" placeholder="new knot"></input>
            </div>
            <button class="c-button c-button--error" onclick="{cancelknot}"><icon icon="close"></icon></button>
            <button class="c-button c-button--success" onclick="{confirmknot}"><icon icon="check"></icon></button>
        </div>
    </div>
</nav>
`,'','', function(opts) {
    this.promptknot = false;
    this.promptstitch = false;
    this.selected = undefined;
    this.onselectknot = (e) => {
        this.selected = e.item.label;
        this.trigger(STORY_NAV.KNOT.GOTO,e.item.label);
    }
    this.onselectstitch = (e) => {
        let k = e.item.path.substring(0,e.item.path.indexOf('.'));
        this.selected = k;
        this.trigger(STORY_NAV.KNOT.GOTO,k)
        this.trigger(STORY_NAV.STITCH.GOTO,e.item.label);
    }
    this.ontoggle = (e) => {
        e.item.expanded = !e.item.expanded
        e.stopPropagation()
    }
    this.on(STORY_EDIT.KNOT.CREATE, () => {
        this.promptknot = true; this.update()
    })
    this.cancelknot = (e) => {
        this.promptknot = false;
    }
    this.confirmknot = (e) => {
        this.promptknot = false;
        this.selected = this.refs.knotname.value;
        this.trigger(STORY_EDIT.KNOT.UPDATE,this.refs.knotname.value);
    }
    this.on(STORY_EDIT.STITCH.CREATE, () => {
        this.promptstitch = true; this.update()
    })
    this.cancelstitch = (e) => {
        this.promptstitch = false;
    }
    this.confirmstitch = (e) => {
        this.promptstitch = false;
        this.trigger(STORY_EDIT.STITCH.UPDATE,this.refs["stitchname_"+this.selected].value);
    }
    this.on('updated', () => {
        if (this.promptknot) this.refs.knotname.focus();
        else if (this.promptstitch) this.refs["stitchname_"+this.selected].focus();
    })
})
