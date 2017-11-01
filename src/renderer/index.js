// Initial welcome page. Delete the following line to remove it.
'use strict';
import './blaze.min.css';
import './font-awesome/css/font-awesome.min.css'
import mousetrap from 'mousetrap';
document.body.classList.add('c-text');

import * as riot from 'riot';
import {mount} from "./tags";
const tags = mount({ text: "Hello world!", subtext: "This world welcomes you." });
const app = tags[0];

mousetrap.bind(['ctrl+k'], (e,s) => {app.trigger('newknot')})
mousetrap.bind(['ctrl+s'], (e,s) => {app.trigger('newstitch')})