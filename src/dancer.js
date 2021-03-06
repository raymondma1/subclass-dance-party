// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.$node.hover(this.startGrow.bind(this,150),this.stopGrow.bind(this));
  this.growIntervalId;
};


Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(left){

  var styleSettings = {
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.grow = function(){
  var factor = 5;
  var b = this.$node.css('border-radius');
  b = b.substr(0, b.length-2);
  this.$node.css('border-radius', parseInt(b)+ factor +"px");
  var b = this.$node.css('border-width');
  b = b.substr(0, b.length-2);
  this.$node.css('border-width', parseInt(b)+ factor +"px");
}

Dancer.prototype.startGrow = function(interval){
  this.growIntervalId = setInterval(this.grow.bind(this), interval )
}

Dancer.prototype.stopGrow = function(){
   clearInterval(this.growIntervalId);
}

Dancer.prototype.rePosition = function() {
  var top = parseInt(this.$node.css('top'));
  var left = parseInt(this.$node.css('left'));

  console.log('#',top,left);
  if ( top >= $(window).height() ) {
    top = $(window).height() - 200;
  }

  if ( left >= $(window).width() ) {
    left = $(window).width() - 200;
  }
  console.log('@',top,left);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}
