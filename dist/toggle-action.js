"use strict";for(var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),radioButtons=document.querySelectorAll(".toggle__wrapper input"),setDarkMode=function(){document.querySelector("body").className="dark"},setLightMode=function(){document.querySelector("body").className="light"},i=0;i<radioButtons.length;i++)radioButtons[i].addEventListener("click",(function(t){darkButton.checked?(localStorage.setItem("colorMode","dark"),setDarkMode()):(localStorage.setItem("colorMode","light"),setLightMode())}));var setColorMode=function(){"dark"==localStorage.getItem("colorMode")?darkButton.click():"light"==localStorage.getItem("colorMode")&&lightButton.click()};setColorMode();
//# sourceMappingURL=toggle-action.js.map