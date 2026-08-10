(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<h1>Warrior Cats Name Generator</h1>

<div class='displayName'>
    <span id='prefixText'>Hello</span>
    <span id='suffixText'>world</span>
</div>

<div class='buttons'>
    <button class='reroll-btn' id='roll-prefix'>New Prefix</button>
    <button class='reroll-btn' id='roll-suffix'>New Suffix</button>
</div>
`;var e=[`Apple`,`Corn`],t=[`apple`,`corn`];function n(e){return e[Math.floor(Math.random()*e.length)]}function r(r){if(r!=null){let i=document.getElementById(r);i!=null&&(i.textContent=n(r===`prefixText`?e:t))}}document.getElementById(`roll-prefix`)?.addEventListener(`click`,()=>r(`prefixText`)),document.getElementById(`roll-suffix`)?.addEventListener(`click`,()=>r(`suffixText`));