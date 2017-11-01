'use strict';
import * as riot from 'riot';

riot.tag('app',
`<appbar
    ref="appbar"
    title="{opts.text}"
    links="{applinks}">
</appbar>
<div class="o-grid o-panel o-panel--nav-top">
    <sidebar ref="sidebar" class="o-grid__cell--width-15 o-grid__cell--hidden o-grid__cell--visible@large o-panel-container"
        knots={knots}>
    </sidebar>
    <main class="o-grid__cell o-grid__cell--width-85@large o-panel-container">
        <div class="o-grid o-grid--wrap o-panel">
            <div class="o-grid__cell o-grid__cell--width-100">
                <h1 class="c-heading u-super">
                    {opts.subtext}
                </h1>
            </div>
			<div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-60@large">
                <rg-unsplash></rg-unsplash>
            </div>
            <div class="o-grid__cell o-grid__cell--width-100 t-secondary">
                <div class="o-grid o-grid--wrap">
                    <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@large">
                        <h3 class="c-heading u-large">Next Goals</h3>
                        <div class="c-card t-demo">
                            <div class="c-card__item">
                                <p class="c-paragraph c-text--loud">Gain more items and add them to the total</p>
                                <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea
                                    et.</p>
                            </div>
                        </div>
                        <div class="c-card t-demo">
                            <div class="c-card__item">
                                <p class="c-paragraph c-text--loud">Max out the number of items</p>
                                <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea
                                    et.</p>
                            </div>
                        </div>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-66@large">
                        <h3 class="c-heading u-large">Notifications</h3>
                            <div class="c-alert c-alert--warning">
                                <button class="c-button c-button--close">×</button>
                                Not all data available for <strong class="u-text--loud">4th June 2016</strong>
                            </div>
                            <div class="c-alert c-alert--success">
                                <button class="c-button c-button--close">×</button>
                                New user added - (dexter@another.com)
                            </div>
                            <div class="c-alert c-alert--info">
                                <button class="c-button c-button--close">×</button>
                                Goal reached on 28th May 2016!
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>`,
function (opts) {
    this.text = opts.text;
    this.subtext = opts.subtext;
    function click (e) {console.log(e)}
    this.applinks = [
        {label:"Account",icon:"user",secondary:true,event:'user'},
        {label:"Help/Support",icon:"life-ring",secondary:true,event:'help'},
        {label:"Settings",icon:"sliders",secondary:true,event:'settings'},
        {label:"About",icon:"question",secondary:true,event:'about'}
    ]
    this.knots = [
        {label:"1", expanded: true, stitches: [{path:"1.1",label:"1"},{path:"1.2",label:"2"},{path:"1.3",label:"3"}]},
        {label:"2", expanded: true},
        {label:"3", expanded: false, stitches: [{path:"3.1",label:"1"},{path:"3.2",label:"2"}]}
    ]
    this.on('mount',() => {
        console.log(this.refs);
        this.refs.appbar.on('about', (e) => {console.log("about")})
        this.refs.appbar.on('user', (e) => {console.log("USER")})
        this.refs.appbar.on('settings', (e) => {console.log("SETTINGS")})
        this.refs.appbar.on('help', (e) => {console.log("HALPS")})
        this.refs.sidebar.on('knot', (knot) => {console.log("CHANGED KNOT",knot)})
        this.refs.sidebar.on('stitch', (stitch) => {console.log("CHANGED STITCH",stitch)})
    })
});