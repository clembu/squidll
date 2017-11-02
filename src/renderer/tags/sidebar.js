'use strict';
import * as riot from 'riot';
import { STORY_EDIT,STORY_NAV,APP_OP } from "common/events";
import keycode from 'keycode';

riot.tag('name-input',
`<div class="c-input-group c-input-group--rounded-right">
    <div class="o-field">
        <input ref="i"
            class="c-field"
            type="text"
            placeholder="{opts.placeholder}"
            onkeyup="{onkeyup}"
            ></input>
    </div>
    <button class="c-button c-button--error" onclick="{cancel}"><icon icon="close"></icon></button>
    <button class="c-button c-button--success" onclick="{confirm}"><icon icon="check"></icon></button>
</div>`,
'',
'onfocus="{onfocus}"',
function(opts) {
    const self = this
    this.cancel = () => {
        opts.cancel();
    }
    this.confirm = () => {
        console.log("CONFIRMING")
        opts.confirm(self.refs.i.value);
    }
    this.onkeyup = (e) => {
        if(e.which == keycode('enter')) {
            self.confirm()
        } else if (e.which == keycode('esc')) {
            self.cancel()
        }
    }
    this.on(APP_OP.FOCUS, () => {
        self.refs.i.focus();
    })
})

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
            <name-input
                ref="stitch_{label}"
                cancel="{parent.cancelstitch}"
                confirm="{parent.confirmstitch}"
                placeholder="new stitch">
            </name-input>
        </div>
    </virtual>
    <div class="c-nav__item" show={promptknot}>
        <name-input
            ref="knotname"
            cancel="{cancelknot}"
            confirm="{confirmknot}"
            placeholder="new knot">
        </name-input>
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
        this.promptknot = false; this.update()
    }
    this.confirmknot = (k) => {
        this.promptknot = false;
        this.selected = k
        this.trigger(STORY_EDIT.KNOT.UPDATE,k);
        this.update()
    }
    this.on(STORY_EDIT.STITCH.CREATE, () => {
        this.promptstitch = true; this.update()
    })
    this.cancelstitch = (e) => {
        this.promptstitch = false; this.update()
    }
    this.confirmstitch = (s) => {
        this.promptstitch = false;
        this.trigger(STORY_EDIT.STITCH.UPDATE,s);
        this.update()
    }
    this.on('updated', () => {
        if (this.promptknot) {this.refs.knotname.trigger(APP_OP.FOCUS);}
        else if (this.promptstitch) this.refs["stitch_"+this.selected].trigger(APP_OP.FOCUS);
    })
})
