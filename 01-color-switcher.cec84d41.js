!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.stop.disabled=!0,t.start.addEventListener("click",(function(){t.stop.disabled=!1,t.start.disabled=!0,e=setInterval((function(){var e;e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.body.style.backgroundColor=e}),1e3)})),t.stop.addEventListener("click",(function(){t.start.disabled=!1,t.stop.disabled=!0,clearInterval(e)})),t.start.style.padding="40px",t.start.style.width="300px",t.start.style.fontSize="50px",t.stop.style.padding="40px",t.stop.style.width="300px",t.stop.style.fontSize="50px",t.body.style.display="flex",t.body.style.padding="300px",t.body.style.alignItems="center",t.body.style.gap="100px"}();
//# sourceMappingURL=01-color-switcher.cec84d41.js.map
