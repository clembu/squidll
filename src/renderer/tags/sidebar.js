'use strict';
import * as riot from 'riot';

riot.tag('sidebar',
`<nav class="c-nav c-nav--light o-panel">
    <virtual each={opts.knots}>
        <div class="{c-nav__item:true}"
            onclick="{parent.onselectknot}">
            <icon icon="{expanded?'chevron-down':'chevron-right'}" onclick="{parent.ontoggle}"></icon>
            {label}
        </div>
        <virtual each={stitches} if={expanded}>
            <div class="c-nav__item" onclick="{parent.onselectstitch}" style="padding-left: 50px">
                {label}
            </div>
        </virtual>
    </virtual>
</nav>
`,'','', function(opts) {
    this.onselectknot = (e) => {
        this.trigger('knot',e.item.label);
    }
    this.onselectstitch = (e) => {
        this.trigger('knot',e.item.path.substring(0,e.item.path.indexOf('.')))
        this.trigger('stitch',e.item.label);
    }
    this.ontoggle = (e) => {
        e.item.expanded = !e.item.expanded
    }
})
