import{c as a,L as c,a as d,h as f}from"./vendor.16442617.js";const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};u();var p="/vr-web-app/assets/rocket.86cef859.glb",m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=(n,t,i,s)=>{for(var e=s>1?void 0:s?v(t,i):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(e=(s?o(t,i,e):o(e))||e);return s&&e&&m(t,i,e),e};let l=class extends c{static get styles(){return d`
            .main {
                display: flex;
            }

            .main__left {
                width: 50%;
                text-align: center;
            }

            h1 {
                font-size: 10rem;
                letter-spacing: -0.5rem;
            }
        `}render(){return f`
            <div class="main">
                <div class="main__left">
                    <h1>Rocket 3</h1>
                </div>
                <div class="main__right">
                    <model-viewer
                        style="height: 100%; width: 50%; position:absolute"
                        bounds="tight"
                        src=${p}
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        shadow-intensity="1"
                        autorotate
                    >
                        <div class="progress-bar hide" slot="progress-bar">
                            <div class="update-bar"></div>
                        </div>
                    </model-viewer>
                </div>
            </div>
        `}};l=h([a("vr-app")],l);
