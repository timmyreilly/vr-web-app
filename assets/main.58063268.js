import{c as a,L as c,a as d,h as u}from"./vendor.16442617.js";const p=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};p();var f="/vr-web-app/assets/rocket.86cef859.glb",m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=(n,r,o,s)=>{for(var e=s>1?void 0:s?v(r,o):r,t=n.length-1,i;t>=0;t--)(i=n[t])&&(e=(s?i(r,o,e):i(e))||e);return s&&e&&m(r,o,e),e};let l=class extends c{static get styles(){return d`
            .main {
                display: flex;
            }

            .main__left {
                width: 50%;
                text-align: right;
            }

            h1 {
                font-size: 10rem;
                letter-spacing: -0.5rem;
            }
        `}render(){return u`
            <div class="main">
                <!-- <div class="main__left">
                    <h1>Rocket 3</h1>
                </div> -->
                <div class="main__right">
                    <model-viewer
                        style="height: 100%; width: 100%; position:absolute"
                        bounds="tight"
                        src=${f}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        environment-image="neutral"
                        shadow-intensity="1"
                    >
                        <div class="progress-bar hide" slot="progress-bar">
                            <div class="update-bar"></div>
                        </div>
                        <button
                            slot="ar-button"
                            id="ar-button"
                            style="position: absolute; bottom: 0; right: 0"
                        >
                            View in your space
                        </button>
                        <div id="ar-prompt">
                            <img
                                src="https://modelviewer.dev/shared-assets/icons/hand.png"
                            />
                        </div>
                    </model-viewer>
                </div>
            </div>
        `}};l=h([a("vr-app")],l);
