'use strict';
import * as riot from 'riot';

riot.tag('icon',
`<i class="fa fa-{opts.icon}"></i>`,
function(opts) {
    this.icon = opts.icon;
});