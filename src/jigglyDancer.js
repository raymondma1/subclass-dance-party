var jigglypuffDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var top = parseInt(this.$node.css('top'));
  var left = parseInt(this.$node.css('left'));

  this.$node = $('<div class ="imgContainer"><img src="img/jiggly.gif"></img></div>')
  this.$node.css('width', '50px');
  this.$node.css('position', 'fixed')
  this.$node.css('top', $(window).height*0.3);
  this.$node.css('left', $(window).width*0.3);

  //$('#jiggy-link').remove();

}
jigglypuffDancer.prototype = Object.create(Dancer.prototype);
jigglypuffDancer.prototype.constructor = jigglypuffDancer;

jigglypuffDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // animation
  var x = Math.floor(Math.random()*80);
  var y = Math.floor(Math.random()*80);
  x = Math.floor(Math.random()*11) < 9 ? x : -x;
  y = Math.floor(Math.random()*11) < 9 ? y : -y;

  var style = { top: "+="+y, left: "+="+x};
  this.$node.animate(style);

  // jigglypuff singing causing pikachus to fall asleep
  x = parseInt(this.$node.css('left'));
  y = parseInt(this.$node.css('top'));
  var neighbors = [];
  var i;
  var tx, ty, tdis;
  for ( i = 0 ; i < window.dancers.length ; i++ ) {
    if ( window.dancers[i] instanceof PikachuDancer ) {
      tx = parseInt( window.dancers[i].$node.css('left') );
      ty = parseInt( window.dancers[i].$node.css('top') );

      tdis = Math.sqrt( Math.pow((tx-x),2) +  Math.pow((ty-y),2) );
      //console.log(x,y,tx,ty,tdis);
      if ( tdis < 70 ) {
        neighbors.push( window.dancers[i] );
      }
    }
  }

  for ( i = 0 ; i < neighbors.length ; i++ ) {
    if ( !neighbors[i].isSleep ) {
      neighbors[i].sleep();
    }
  }

  // destroy
  if( parseInt(this.$node.css('top')) > $(window).height()+100 ) {
    this.step = function(){};
    this.$node.remove();
  }

};

jigglypuffDancer.prototype._reposition = Dancer.prototype.rePosition;
jigglypuffDancer.prototype.grow = function(){
};
