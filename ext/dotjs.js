$.ajax({
  url: 'http://localhost:3131/'+window.location.host.replace('www.','')+'',
  dataType: 'text',
  success: function(d){
    var script  = document.createElement('script')
    script.innerHTML = d
    document.body.appendChild(script);
  },
  error: function(){
    console.log('no dotjs server found at localhost:3131')
  }
})