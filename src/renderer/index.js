// Initial welcome page. Delete the following line to remove it.
'use strict';
import * as riot from 'riot';

document.body.innerHTML = '<squidll></squidll>';

riot.tag('squidll',
    `<h1>{opts.text}</h1>`,
    function (opts) {
        this.text = opts.text;
    });

riot.mount('squidll', { text: "Hello world!" });