import{c as a,L as c,a as d,h as u}from"./vendor.16442617.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};f();var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=(n,r,i,s)=>{for(var e=s>1?void 0:s?p(r,i):r,t=n.length-1,o;t>=0;t--)(o=n[t])&&(e=(s?o(r,i,e):o(e))||e);return s&&e&&m(r,i,e),e};let l=class extends c{static get styles(){return d`
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
    `}render(){return u`
      <div class="main">
        <div class="main__left">
          <h1>Rocket 3</h1>
        </div>
        <div class="main__right">
          <model-viewer
            style="height: 100%; width: 50%; position:absolute"
            bounds="tight"
            src="src/assets/models/rocket.glb"
            ar
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
    `}};l=v([a("vr-app")],l);
