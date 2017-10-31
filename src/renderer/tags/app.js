'use strict';
import * as riot from 'riot';

riot.tag('app',
`<h1>{opts.text}</h1>
<p>{opts.subtext}</p>`,
function (opts) {
    this.text = opts.text;
    this.subtext = opts.subtext;
});