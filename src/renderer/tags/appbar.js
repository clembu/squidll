'use strict';
import * as riot from 'riot';

riot.tag('appbar',
`<nav class="c-nav c-nav--inline">
    <div class="c-nav__item c-text--loud">{opts.title}</div>
    <div each={opts.links} class="{c-nav__item:true,c-nav__item--right:secondary}" onclick="{onclick}">
        <icon icon="{icon}"></icon> {label}
    </div>
</nav>
`, function(opts) {
})
