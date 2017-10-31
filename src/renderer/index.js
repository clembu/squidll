// Initial welcome page. Delete the following line to remove it.
'use strict';
import './blaze.min.css';
import './font-awesome/css/font-awesome.min.css'
document.body.classList.add('c-text');

import * as riot from 'riot';
import {mount} from "./tags";
mount({ text: "Hello world!", subtext: "This world welcomes you." });