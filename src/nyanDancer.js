var NyanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$nyanImg = $('<div class="imgContainer"><img src="img/nyan.gif"></img></div>');
  this.$node.append(this.$nyanImg);
  this.$node.css('border-width', '0px');
  this.$node.css('border-radius', '0px');
};

NyanDancer.prototype = Object.create(Dancer.prototype);
NyanDancer.prototype.constructor = NyanDancer;

NyanDancer.prototype.step = function(){

};



NyanDancer.prototype.grow = function(){
  // override father class method grow()

  var factor = 5;


  var b = this.$node.find('.imgContainer').css('width');
  b = b.substr(0, b.length-2);
  this.$node.find('.nyanContainer').css('width', parseInt(b)+ factor +"px");


};
