// Append a script tag instead of evaluating as the extenstion runtime is getting in the way
var script  = document.createElement('script')
script.src  = 'http://localhost:3131/'+window.location.host.replace('www.','')
script.type = 'text/javascript'
window.onload = function() {
  document.body.appendChild(script);
};
