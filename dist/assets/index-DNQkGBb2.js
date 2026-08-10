(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<h1>Warrior Cats Name Generator</h1>

<div class='displayName'>
    <span id='prefixText'>Loading</span>
    <span id='suffixText'>...</span>
</div>

<div class='buttons'>
    <button class='reroll-btn' id='roll-prefix' disabled>New Prefix</button>
    <button class='reroll-btn' id='roll-suffix' disabled>New Suffix</button>
</div>
`;var e=[];function t(e){return e[Math.floor(Math.random()*e.length)]}function n(n){if(n!=null){let r=document.getElementById(n);r!=null&&(r.textContent=t(e))}}async function r(){try{e=await(await fetch(`./nameBank.json`)).json();let t=document.getElementById(`roll-prefix`),r=document.getElementById(`roll-suffix`);t&&r&&(t.disabled=!1,r.disabled=!1,t.addEventListener(`click`,()=>n(`prefixText`)),r.addEventListener(`click`,()=>n(`suffixText`))),n(`prefixText`),n(`suffixText`)}catch(e){console.error(e),document.getElementById(`prefixText`).textContent=`Error loading names`}}r();