const AUTOMATIC_COLOR_SCHEME = 1;

document.addEventListener('page_params', function (e) {
    var page_params = e.detail;
    if (page_params.color_scheme === AUTOMATIC_COLOR_SCHEME &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)  {
            document.querySelector("body").classList.add("night-mode");
        }
  });

var actual  = `
const {page_params} = require("./static/js/page_params")
document.dispatchEvent(new CustomEvent('page_params', { detail: page_params }));
`
var script = document.createElement('script');
script.textContent = actual;
(document.head||document.documentElement).appendChild(script);
script.remove();