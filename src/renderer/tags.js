'use strict';
import * as riot from 'riot';
import './rg.js';
import './tags/icon';
import './tags/appbar';
import './tags/app';

export function mount(opts) {
    document.body.innerHTML = '<app></app>';
    riot.mount('app', opts);
}