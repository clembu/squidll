'use strict';
import * as riot from 'riot';

riot.tag('sidebar',
`<nav class="c-nav c-nav--light o-panel">
    <virtual each={opts.knots}>
        <div class="c-nav__item" onclick="{parent.onselectknot}">
            <icon icon="chevron-circle-right"></icon> {label}
        </div>
        <virtual each={stitches}>
            <div class="c-nav__item" onclick="{parent.onselectstitch}">
                <icon icon="chevron-right"></icon> {label}
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
})
