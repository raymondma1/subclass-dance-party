var RainbowBlinkyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

RainbowBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
RainbowBlinkyDancer.prototype.constructor = RainbowBlinkyDancer;


RainbowBlinkyDancer.prototype.rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
RainbowBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  BlinkyDancer.prototype.step.call(this);

  var color;


  if ( this.$node.css('display') === 'none' ) {
    color = this.rainbowColors[Math.floor(Math.random()*7)];

    this.$node.css('border-color',  color );
  }

};

