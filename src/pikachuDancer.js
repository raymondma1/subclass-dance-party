var PikachuDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$pikaImg = $('<div class="imgContainer"><img src="img/pika_run_1.gif"></img></div>');
  this.$node.append(this.$pikaImg);
  this.$node.css('border-width', '0px');
  this.$node.css('border-radius', '0px');
  this.speed = 8;

  this.$node.css('top', Math.floor($(window).height() - 150)+'px');


  this.isSleep = false;
  this.sleepCounter = 0;

  this.$node.click(this.evolve.bind(this));
};
PikachuDancer.prototype = Object.create(Dancer.prototype);
PikachuDancer.prototype.constructor = PikachuDancer

PikachuDancer.prototype._dancer_step = Dancer.prototype.step;
PikachuDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  if ( this.isSleep ) {
    this.sleepCounter++;
    if ( this.sleepCounter > 200 ) {
      this.wake();
    }
    return ;
  }
  var left = parseInt(this.$node.css('left'));
  this.$node.css('left',left+this.speed);
  if ( left >= $(window).width() ) {
    this.$node.css('left', -80);
  }
};

PikachuDancer.prototype.grow = function(){
  // override father class method grow()
};
PikachuDancer.prototype.evolve = function(){
  if ( this.isSleep ) return ;
  this.$node.find('img').attr('src', 'img/pichu_dance_1.gif');
  this.speed = 3;
}

PikachuDancer.prototype._dancer_rePosition = Dancer.prototype.rePosition;
PikachuDancer.prototype.rePosition = function() {
  this._dancer_rePosition();
  this.$node.css('top', Math.floor($(window).height() - 150) +'px');
};
PikachuDancer.prototype.sleep = function(){

  this.isSleep = true;
  this.sleepCounter = 0;

  this.$node.find('img').attr('src', 'img/pika_sleep_1.gif');
  this.$node.find('div').css('width', '70px');
}
PikachuDancer.prototype.wake = function(){
  this.isSleep =false;
  this.sleepCounter = 0;
  this.$node.find('img').attr('src', 'img/pika_run_1.gif');
  this.$node.find('div').css('width', '100px');

}
