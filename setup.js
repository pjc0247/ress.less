var configs = {
  presets : {
    mobile : 640,
    tablet : 1024
  }
};
var current_mode = '';
 
var setup = function(){
  less.modifyVars(config.presets);
}();
 
$(window).resize(function(){
  var w = $(window).width();
  
  current_mode = 'default';
  
  for(i=0;i<config.presets.length;i++){
    var preset = config.presets[i];
    
    if(w < preset.max_width)
      current_mode = preset.name;
  }
  
  less.modifyVars({
    '@mode' : current_mode
  });
}());
