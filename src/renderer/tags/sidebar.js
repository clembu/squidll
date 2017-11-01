'use strict';
import * as riot from 'riot';

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
    console.log(opts)
    this.promptknot = false;
    this.promptstitch = false;
    this.selected = undefined;
    this.onselectknot = (e) => {
        this.selected = e.item.label;
        this.trigger('knot',e.item.label);
    }
    this.onselectstitch = (e) => {
        let k = e.item.path.substring(0,e.item.path.indexOf('.'));
        this.selected = k;
        this.trigger('knot',k)
        this.trigger('stitch',e.item.label);
    }
    this.ontoggle = (e) => {
        e.item.expanded = !e.item.expanded
        e.stopPropagation()
    }
    this.on('newknot', () => {
        this.promptknot = true; this.update()
    })
    this.cancelknot = (e) => {
        this.promptknot = false;
    }
    this.confirmknot = (e) => {
        this.promptknot = false;
        this.trigger('createknot',this.refs.knotname.value);
    }
    this.on('newstitch', () => {
        this.promptstitch = true; this.update()
    })
    this.cancelstitch = (e) => {
        this.promptstitch = false;
    }
    this.confirmstitch = (e) => {
        this.promptstitch = false;
        this.trigger('createstitch',this.refs["stitchname_"+this.selected].value);
    }
    this.on('updated', () => {
        if (this.promptknot) this.refs.knotname.focus();
        else if (this.promptstitch) this.refs["stitchname_"+this.selected].focus();
    })
})
