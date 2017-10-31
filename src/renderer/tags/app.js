'use strict';
import * as riot from 'riot';

riot.tag('app',
`<virtual
    ref="appbar"
    data-is="appbar"
    title="{opts.text}"
    links="{applinks}">
</virtual>
<div class="o-grid o-panel o-panel--nav-top">
    <div class="o-grid__cell--width-15 o-grid__cell--hidden o-grid__cell--visible@large o-panel-container">
        <nav class="c-nav c-nav--light o-panel">
            <div class="c-nav__item">Reports</div>
            <div class="c-nav__item">Analytics</div>
            <div class="c-nav__item">Data Gathering</div>
        </nav>
    </div>
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
        {label:"TEST",icon:"question",event:'test'},
        {label:"Account",icon:"user",secondary:true,event:'user'},
        {label:"Help/Support",icon:"life-ring",secondary:true,event:'help'},
        {label:"Settings",icon:"sliders",secondary:true,event:'settings'}
    ]
    this.on('mount',() => {
        this.refs.appbar.on('test', (e) => {console.log("TESTED")})
        this.refs.appbar.on('user', (e) => {console.log("USER")})
        this.refs.appbar.on('settings', (e) => {console.log("SETTINGS")})
        this.refs.appbar.on('help', (e) => {console.log("HALPS")})
    })
});